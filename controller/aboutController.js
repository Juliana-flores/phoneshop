/**
 * @typedef {import('express').Request} Request
 * @typedef {import('express').Response} Response
 */
class AboutController {
  /**
   * @function get
   * @param {Request} request
   * @param {Response} response
   */
  get (request, response) {
    response.marko(require('../views/about.marko'))
  }
}

module.exports = AboutController
