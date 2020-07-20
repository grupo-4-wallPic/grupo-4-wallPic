const express = require('express');
const router = express.Router();

const pruebasController = require('../controllers/pruebasController')

router.get('/products', pruebasController.product)
router.get('/category', pruebasController.category)
router.get('/color', pruebasController.color)
router.get('/size', pruebasController.size)


module.exports = router;