/**
 * External files
 */
require('marko/node-require').install()
require('dotenv').config()
require('marko/express')

require('./data/database').getInstance()
require('./config/passport')

const express = require('express')

const app = express()


const session = require('express-session')
const cookie = require('cookie-parser')

const passport = require('passport')
const flash = require('connect-flash')

const path = require('path')

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookie())

app.use(
  session({ secret: 'anySecret', resave: false, saveUninitialized: false })
)

app.use(flash())

app.use(passport.initialize())
app.use(passport.session())

/**
 * Variável para validar nas views se o usuário está logado
 */
app.use((request, response, next) => {
  response.locals.login = request.isAuthenticated()
  next()
})

app.use('/public', express.static(path.join(__dirname, 'public')))
app.use('/', require('./routes'))

module.exports = app
