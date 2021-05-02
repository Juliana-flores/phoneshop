const express = require('express')
const router = express.Router()
const products = require('../data/products.json')

/* GET home page. */
router.get('/', function (req, res, next) {
  res.marko(require('../views/index.marko'), {
    products
  })
})

router.use(require('./login'))
router.use(require('./about'))
router.use(require('./cadastro'))

module.exports = router
