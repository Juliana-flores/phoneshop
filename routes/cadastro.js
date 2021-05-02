const passport = require('passport')
const express = require('express')
const router = express.Router()

/* GET home page. */
router.get('/cadastro', function (req, res, next) {
  const errors = req.flash('error')
  res.marko(require('../views/cadastro.marko'), { errors })
})

router.post(
  '/cadastro',
  passport.authenticate('local.signup', {
    successRedirect: '/',
    failureRedirect: '/cadastro',
    failureFlash: true
  })
)

module.exports = router
