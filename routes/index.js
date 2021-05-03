const express = require('express')
const router = express.Router()
const Product = require('../models/product')

/* GET home page. */
router.get('/', (req, res, next) => {
  Product.find((error, products) => {
    res.marko(require('../views/index.marko'), {
      products
    })
  })
})

router.use(require('./login'))
router.use(require('./about'))
router.use(require('./cadastro'))
router.use(require('./contato'))

module.exports = router
