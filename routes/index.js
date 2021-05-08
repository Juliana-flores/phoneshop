const express = require('express')
const router = express.Router()

/** @type {import('mongoose').Model} */
const Product = require('../models/product')

/* GET home page. */
router.get('/', async (req, res, next) => {
  const products = await Product.find()
  res.marko(require('../views/index.marko'), {
    products
  })
})

router.use(require('./login'))
router.use(require('./about'))
router.use(require('./cadastro'))
router.use(require('./contato'))
router.use(require('./carrinho'))
router.use(require('./checkout'))

module.exports = router
