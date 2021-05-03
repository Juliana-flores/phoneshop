const passport = require('passport')
const express = require('express')
const router = express.Router()

/* GET login page. */
router.get('/login', (req, res, next) => {
  const errors = req.flash('error')
  res.marko(require('../views/login.marko'), { errors })
})

router.post(
  '/login',
  passport.authenticate('local.signin', {
    successRedirect: '/',
    failureRedirect: '/login',
    failureFlash: true
  })
)

router.get('/logout', (request, response, next) => {
  request.logout()
  response.redirect('/')
})

module.exports = router
