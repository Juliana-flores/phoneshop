const passport = require('passport')
const express = require('express')
const router = express.Router()

const CadastroController = require('../controller/cadastroController')
const controller = new CadastroController()

/* GET cadastro page. */
router.get('/cadastro', controller.get.bind(controller))

router.post(
  '/cadastro',
  passport.authenticate('local.signup', {
    successRedirect: '/',
    failureRedirect: '/cadastro',
    failureFlash: true
  })
)

module.exports = router
