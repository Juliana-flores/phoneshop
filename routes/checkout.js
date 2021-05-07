const express = require('express')
const Cart = require('../models/cart')

const CardService = require('../services/card')

const service = new CardService()
const router = express.Router()

/* GET checkout page. */
router.get('/checkout', (req, res, next) => {
  if (!req.session.cart) {
    return res.redirect('/')
  }
  const cart = new Cart(req.session.cart)

  res.marko(require('../views/shop/checkout.marko'), {
    total: cart.totalPrice
  })
})

router.post('/checkout', async (req, res, next) => {
  if (!req.body) {
    return res.redirect('/')
  }

  const { exp_month, exp_year, name, number, cvc, address_line1 } = req.body

  const rawCard = {
    exp_month,
    exp_year,
    name,
    number: number.split(/\s/).join(''),
    cvc,
    address_line1
  }

  const card = await service.isValid(rawCard)

  if (!card) {
    const cart = new Cart(req.session.cart)
    return res.marko(require('../views/shop/checkout.marko'), {
      total: cart.totalPrice,
      error: 'Cartão inválido.'
    })
  }
})

module.exports = router
