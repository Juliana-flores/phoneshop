/**
 * @typedef {import('mongoose').Model} Model
 * @typedef {import('express').Request} Request
 * @typedef {import('express').Response} Response
 */

/** @type {Model} */
const Product = require('../models/product')
/** @type {Model} */
const Cart = require('../models/cart')

class CadastroController {
  /**
   * @function get
   * @param {Request} request
   * @param {Response} response
   * @returns
   */
  get (request, response) {
    if (!request.session.cart) {
      return response.marko(require('../views/shop/shopping-cart.marko'), {
        products: null
      })
    }
    const cart = new Cart(request.session.cart)
    const products = cart.generateArray()
    response.marko(require('../views/shop/shopping-cart.marko'), {
      products,
      totalPrice: cart.totalPrice
    })
  }

  /**
   * @async
   * @function addToCart
   * @param {Request} request
   * @param {Response} response
   * @returns
   */
  async addToCart (request, response) {
    const productId = request.params.id
    const oldCart = request.session.cart

    const cart = new Cart(oldCart)
    const product = await Product.findById(productId)

    if (!product) {
      return response.redirect('/')
    }

    cart.add(product, product.id)

    request.session.cart = cart
    response.redirect('/')
  }

  /**
   * @function remove
   * @param {Request} request
   * @param {Response} response
   */
  remove (request, response) {
    const productId = request.params.id
    const oldCart = request.session.cart

    const cart = new Cart(oldCart)

    cart.remove(productId)
    request.session.cart = cart
    response.redirect('/carrinho')
  }

  /**
   * @function add
   * @param {Request} request
   * @param {Response} response
   */
  async add (request, response) {
    const productId = request.params.id
    const oldCart = request.session.cart

    const cart = new Cart(oldCart)
    const product = await Product.findById(productId)

    cart.add(product, product.id)

    request.session.cart = cart
    response.redirect('/carrinho')
  }
}

module.exports = CadastroController
