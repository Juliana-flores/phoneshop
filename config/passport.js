const LocalStrategy = require('passport-local').Strategy
const passport = require('passport')

const User = require('../models/user')

passport.serializeUser((user, done) => done(null, user.id))

passport.deserializeUser((id, done) => {
  User.findById(id, (error, user) => {
    done(error, user)
  })
})

const signUp = (request, email, password, done) => {
  User.findOne({ email }, (err, user) => {
    if (err) {
      return done(err)
    }
    if (user) {
      return done(null, false, { message: 'E-mail já está sendo utilizado.' })
    }

    const newUser = new User()

    newUser.email = email
    newUser.password = newUser.encryptPassword(password)
    newUser.name = request.body.name

    newUser.save((error, result) => {
      if (error) {
        done(error)
      }
      return done(null, newUser)
    })
  })
}

const signIn = (request, email, password, done) => {
  User.findOne({ email }, (error, user) => {
    if (error) {
      return done(error)
    }
    if (!user) {
      return done(null, false, { message: 'Usuário inválido' })
    }

    if (!user.decryptPassword(password)) {
      return done(null, false, { message: 'Senha inválida' })
    }

    return done(null, user)
  })
}

const signUpStrategy = new LocalStrategy(
  {
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: true
  },
  signUp
)

const signInStrategy = new LocalStrategy(
  {
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: true
  },
  signIn
)

passport.use('local.signup', signUpStrategy)
passport.use('local.signin', signInStrategy)
