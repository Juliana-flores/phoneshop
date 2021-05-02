const express = require('express')
const router = express.Router()
/* GET home page. */
router.get('/login', (req, res, next) => {
  res.marko(require('../views/login.marko'))
})

module.exports = router
