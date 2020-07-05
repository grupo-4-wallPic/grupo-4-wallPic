const {check, validatorResult, body} = require('express-validator');

module.exports = {

    registerValidator: [
        check('name').isEmpty().withMessage('Este campo no puede estar vacío'),
        check('lastname').isEmpty().withMessage('Este campo no puede estar vacío'),
        check('email').isEmpty().withMessage('Debe ingresar un correo electrónico').bail().isEmail().withMessage('Debe ingresar un email válido'),
        check('password').isLength( {min: 8} ).withMessage('La contraseña debe tener al menos 8 caracteres'),
        check('retype').equals('password').withMessage('No coincide con la contraseña anterior')
    ]

}