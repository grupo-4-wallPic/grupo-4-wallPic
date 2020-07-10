const express = require ('express');
const router = express.Router ();
const homeController = require('../controllers/homeController')
const loginController = require('../controllers/loginController')
const registerController = require ('../controllers/registerController')
const validator = require('../middlewares/validator')

router.get('/', homeController.main);
router.get ('/login', loginController.index);
router.post('/login', validator.login, loginController.login);
router.get ('/register', registerController.index)
router.post('/register', validator.registerValidator, registerController.registro);


module.exports = router;