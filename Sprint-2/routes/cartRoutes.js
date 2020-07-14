const express = require('express')
const routes = express.Router()

const cartController = require('../controllers/cartController')

routes.get('/', cartController.cart)


module.exports = routes