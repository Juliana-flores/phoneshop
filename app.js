/**
 * External files
 */
require('marko/node-require').install()
require('dotenv').config()
require('marko/express')

require('./data/database').getInstance()
require('./config/passport')

const express = require('express')

const session = require('express-session')
const cookie = require('cookie-parser')

const passport = require('passport')
const flash = require('connect-flash')

const path = require('path')
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookie())

app.use(
  session({ secret: 'anySecret', resave: false, saveUninitialized: false })
)

app.use(flash())

app.use(passport.initialize())
app.use(passport.session())

app.use('/public', express.static(path.join(__dirname, 'public')))
app.use('/', require('./routes'))

module.exports = app
