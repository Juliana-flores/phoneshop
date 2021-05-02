const express = require('express')
const router = express.Router()

/* GET home page. */
router.get('/cadastro', function (req, res, next) {
  res.marko(require('../views/cadastro.marko'))
})

module.exports = router
