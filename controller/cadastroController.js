/**
 * @typedef {import('express').Request} Request
 * @typedef {import('express').Response} Response
 */
class CadastroController {
  /**
   * @function get
   * @param {Request} request
   * @param {Response} response
   */
  get (request, response) {
    const errors = request.flash('error')
    response.marko(require('../views/cadastro.marko'), { errors })
  }
}

module.exports = CadastroController
