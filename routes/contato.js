const express = require('express')
const router = express.Router()

const ContatoController = require('../controller/contatoController')
const controller = new ContatoController()

/* GET contato page. */
router.get('/contato', controller.get.bind(controller))

router.post('/contato', controller.post.bind(controller))

module.exports = router
