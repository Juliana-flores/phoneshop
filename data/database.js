const mongoose = require('mongoose')

class Database {
  constructor () {
    this.cursor = mongoose.connect(
      `mongodb+srv://${process.env.db_user}:${process.env.db_password}@phoneshop.hxjzu.mongodb.net/${process.env.db_name}?retryWrites=true&w=majority`,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true
      }
    )
  }

  static getInstance () {
    if (!Database.instance) {
      Database.instance = new Database()
    }

    return Database.instance
  }

  async connect () {
    this.cursor = await this.cursor
    return cursor
  }
}

module.exports = Database
