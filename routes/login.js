const passport = require('passport')
const express = require('express')
const router = express.Router()

const LoginController = require('../controller/loginController')
const controller = new LoginController()

const isLoggedIn = (request, response, next) => {
  if (request.isAuthenticated()) {
    return next()
  }
  response.redirect('/')
}

const isNotLoggedIn = (request, response, next) => {
  if (!request.isAuthenticated()) {
    return next()
  }
  response.redirect('/')
}

/* GET login page. */
router.get('/login', controller.get.bind(controller))

router.post(
  '/login',
  isNotLoggedIn,
  passport.authenticate('local.signin', {
    successRedirect: '/',
    failureRedirect: '/login',
    failureFlash: true
  })
)

router.get('/logout', isLoggedIn, controller.logout.bind(controller))

module.exports = router
