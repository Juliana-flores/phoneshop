const express = require('express')
const Cart = require('../models/cart')
const Product = require('../models/product')
const router = express.Router()

router.get('/', (req, res) => {
  res.marko(require('../views/shop/shopping-cart.marko'))
})
router.get('/add-to-cart/:id', (req, res) => {
  const productId = req.params.id
  const oldCart = req.session.cart
  const cart = new Cart(oldCart)
  Product.findById(productId, (error, product) => {
    if (error) {
      return res.redirect('/')
    }
    cart.add(product, product.id)
    req.session.cart = cart
    res.redirect('/')
  })
})

module.exports = router
