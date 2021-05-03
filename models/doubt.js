const { Schema, model } = require('mongoose')

const messageSchema = new Schema({
  name: { type: String },
  email: { type: String },
  phone: { type: String },
  message: { type: String }
})

module.exports = model('Doubt', messageSchema)
