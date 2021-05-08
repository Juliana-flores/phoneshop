const express = require('express')
const router = express.Router()

const AboutController = require('../controller/aboutController')
const controller = new AboutController()

/* GET about page. */
router.get('/about', controller.get.bind(controller))

module.exports = router
