class Cart {
  /**
   * @class
   * @param {Cart} oldCart
   */
  constructor (oldCart = {}) {
    this.items = oldCart.items || {}
    this.totalQty = oldCart.totalQty || 0
    this.totalPrice = oldCart.totalPrice || 0
  }

  /**
   * @function add
   * @param {object} item
   * @param {string} id
   */
  add (item, id) {
    let storedItem = this.items[id]
    if (!storedItem) {
      storedItem = this.items[id] = { item, qty: 0, price: 0 }
    }
    storedItem.qty++
    storedItem.price = storedItem.item.price * storedItem.qty

    this.totalQty++
    this.totalPrice += storedItem.item.price
  }

  /**
   * @function remove
   * @param {string} id
   * @returns
   */
  remove (id) {
    let storedItem = this.items[id]
    if (!storedItem) {
      return
    }

    storedItem.qty--
    storedItem.price = storedItem.item.price * storedItem.qty

    this.totalQty--
    this.totalPrice -= storedItem.item.price

    if (storedItem.qty === 0) {
      delete this.items[id]
    }
  }

  generateArray () {
    return Object.values(this.items)
  }
}

module.exports = Cart
