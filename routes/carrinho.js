const express = require('express')
const router = express.Router()

const CarrinhoController = require('../controller/carrinhoController')
const controller = new CarrinhoController()

router.get('/carrinho', controller.get.bind(controller))

router.get('/carrinho/add-to-cart/:id', controller.addToCart.bind(controller))

router.get('/carrinho/remove/:id', controller.remove.bind(controller))

router.get('/carrinho/add/:id', controller.add.bind(controller))

module.exports = router
