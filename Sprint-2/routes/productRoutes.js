const express = require ('express');
const router = express.Router ();
const productController = require('../controllers/productController')


router.get('/', productController.root);
router.get ('/:id?', productController.item);



module.exports = router;