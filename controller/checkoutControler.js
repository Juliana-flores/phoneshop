/**
 * @typedef {import('mongoose').Model} Model
 * @typedef {import('express').Request} Request
 * @typedef {import('express').Response} Response
 */

const Cart = require('../models/cart')
const CardService = require('../services/card')

class CheckoutController {
  /**
   * @class
   */
  constructor () {
    this.service = new CardService()
  }

  /**
   * @function get
   * @param {Request} request
   * @param {Response} response
   * @returns
   */
  get (request, response) {
    if (!request.session.cart) {
      return response.redirect('/')
    }

    const cart = new Cart(request.session.cart)

    response.marko(require('../views/shop/checkout.marko'), {
      total: cart.totalPrice
    })
  }

  /**
   * @async
   * @function post
   * @param {Request} request
   * @param {Response} response
   * @returns
   */
  async post (request, response) {
    if (!request.body) {
      return response.redirect('/')
    }

    const {
      exp_month,
      exp_year,
      name,
      number,
      cvc,
      address_line1
    } = request.body

    const rawCard = {
      exp_month,
      exp_year,
      name,
      number: number.split(/\s/).join(''),
      cvc,
      address_line1
    }

    const card = await this.service.isValid(rawCard)

    if (!card) {
      const cart = new Cart(request.session.cart)
      return response.marko(require('../views/shop/checkout.marko'), {
        total: cart.totalPrice,
        error: 'Cartão inválido.'
      })
    }
    return response.marko(require('../views/shop/compra-finalizada.marko'))
  }
}

module.exports = CheckoutController
