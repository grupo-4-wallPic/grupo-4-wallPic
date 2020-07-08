const express = require ('express');
const router = express.Router ();
const homeController = require('../controllers/homeController')
const loginController = require('../controllers/loginController')
const registerController = require ('../controllers/registerController')
const validator = require('../middlewares/validator')

router.get('/', homeController.main);
router.post('/login', loginController.login);
router.get ('/login', loginController.index);
router.get ('/register', registerController.index)
router.post('/register',validator.registerValidator, registerController.index);


module.exports = router;