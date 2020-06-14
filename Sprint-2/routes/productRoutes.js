const express = require ('express');
const router = express.Router ();
const productController = require('../controllers/productController')


router.get('/', productController.root)



module.exports = router;