const express = require('express')
const router = express.Router()
const CheckoutController = require('../controller/checkoutControler')
const controller = new CheckoutController()

/* GET checkout page. */
router.get('/checkout', controller.get.bind(controller))

router.post('/checkout', controller.post.bind(controller))

module.exports = router
