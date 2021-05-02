const { Schema, model } = require('mongoose')
const crypt = require('bcrypt-nodejs')

const userSchema = new Schema({
  email: { type: String, required: true },
  password: { type: String, required: true },
  name: { type: String, require: true }
})

userSchema.methods.encryptPassword = password =>
  crypt.hashSync(password, crypt.genSaltSync(5), null)

userSchema.methods.decryptPassword = function (password) {
  return crypt.compareSync(password, this.password)
}

module.exports = model('User', userSchema)
