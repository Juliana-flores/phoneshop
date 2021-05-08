/**
 * @typedef {import('express').Request} Request
 * @typedef {import('express').Response} Response
 */
class LoginController {
  /**
   * @function get
   * @param {Request} request
   * @param {Response} response
   */
  get (request, response) {
    const errors = request.flash('error')
    response.marko(require('../views/login.marko'), { errors })
  }

  /**
   * @function logout
   * @param {Request} request
   * @param {Response} response
   */
  logout (request, response) {
    request.logout()
    response.redirect('/')
  }
}

module.exports = LoginController
