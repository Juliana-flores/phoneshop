const passport = require('passport')
const express = require('express')
const router = express.Router()

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
router.get('/login', (req, res, next) => {
  const errors = req.flash('error')
  res.marko(require('../views/login.marko'), { errors })
})

router.post(
  '/login',
  isNotLoggedIn,
  passport.authenticate('local.signin', {
    successRedirect: '/',
    failureRedirect: '/login',
    failureFlash: true
  })
)

router.get('/logout', isLoggedIn, (request, response, next) => {
  request.logout()
  response.redirect('/')
})

module.exports = router
