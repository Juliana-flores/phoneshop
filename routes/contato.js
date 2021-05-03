const express = require('express')
const router = express.Router()

const Doubt = require('../models/doubt')

/* GET contato page. */
router.get('/contato', (req, res, next) => {
  res.marko(require('../views/contato.marko'))
})

router.post('/contato', (req, res, next) => {
  const { name, email, phone, message } = req.body

  const doubt = new Doubt()

  doubt.name = name
  doubt.email = email
  doubt.phone = phone
  doubt.message = message

  doubt.save((error, result) => {
    return res.redirect('/')
  })
})

module.exports = router
