/**
 * @typedef {import('mongoose').Model} Model
 * @typedef {import('mongoose').Document} Document
 * @typedef {import('express').Request} Request
 * @typedef {import('express').Response} Response
 */

/** @type {Model} */
const Doubt = require('../models/doubt')

class ContatoController {
  /**
   * @function get
   * @param {Request} request
   * @param {Response} response
   */
  get (request, response) {
    response.marko(require('../views/contato.marko'))
  }

  /**
   * @async
   * @function post
   * @param {Request} request
   * @param {Response} response
   * @returns
   */
  async post (request, response) {
    const { name, email, phone, message } = request.body

    /** @type {Document} */
    const doubt = new Doubt()

    doubt.name = name
    doubt.email = email
    doubt.phone = phone
    doubt.message = message

    await doubt.save()

    return response.redirect('/')
  }
}

module.exports = ContatoController
