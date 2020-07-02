const express = require ('express');
const router = express.Router ();
const homeController = require('../controllers/homeController')
const loginController = require('../controllers/loginController');

router.get('/', homeController.main);
router.post('/login', loginController.login); 
router.post('/register', loginController.register);


module.exports = router;