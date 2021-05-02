require('marko/node-require').install()
require('marko/express')

const express = require('express')
// const marko = require('express-marko')

const path = require('path')
const cookieParser = require('cookie-parser')
const logger = require('morgan')
const app = express()

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use('/public', express.static(path.join(__dirname, 'public')))
app.use('/', require('./routes'))
module.exports = app
