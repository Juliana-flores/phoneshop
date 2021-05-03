const express = require('express')
const router = express.Router()

/* GET about page. */
router.get('/about', (req, res, next) => {
  res.marko(require('../views/about.marko'))
})

module.exports = router
