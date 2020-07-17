const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path')

const adminController = require('../controllers/adminController');


let storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'public/images/products')
    },
    filename: function (req, file, cb) {
      cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
  })
   
  let upload = multer({ storage: storage })


router.get('/', adminController.main);
router.post('/new', upload.any(), adminController.newProduct)
router.post('/color', adminController.newColor)
router.post('/size', adminController.newSize)
router.post('/category', adminController.newCategory)

module.exports = router;