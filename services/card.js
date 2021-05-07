const stripe = require('stripe')

class CardService {
  constructor () {
    /** @type {stripe.Stripe} */
    this.service = stripe(process.env.stripe_key)
  }

  async isValid (id, card) {
    try {
      return await this.service.tokens.create({ card })
    } catch (error) {
      console.error('Error', error)
      return null
    }
  }
}
module.exports = CardService
