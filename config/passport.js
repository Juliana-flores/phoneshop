const LocalStrategy = require('passport-local').Strategy
const passport = require('passport')

const User = require('../models/user')

passport.serializeUser((user, done) => done(null, user.id))

passport.deserializeUser((id, done) => {
  User.findById(id, (error, user) => {
    done(error, user)
  })
})

const callback = (request, email, password, done) => {
  console.log(email, password, done)
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
    newUser.save((error, result) => {
      if (error) {
        done(error)
      }
      return done(null, newUser)
    })
  })
}

const strategy = new LocalStrategy(
  {
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: true
  },
  callback
)

passport.use('local.signup', strategy)
