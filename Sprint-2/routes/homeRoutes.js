const express = require ('express');
const router = express.Router ();
const homeController = require('../controllers/homeController')
const loginController = require('../controllers/loginController')
const validator = require('../middlewares/validator')

router.get('/', homeController.main);
router.post('/login', loginController.login);
router.post('/register',validator.registerValidator, loginController.register);


module.exports = router;