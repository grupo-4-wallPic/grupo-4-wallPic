const fs = require ('fs');
const path = require ('path');
const bcryptjs = require('bcryptjs')
const {validationResult} = require('express-validator')

const registerController = {

    index: (req, res) => {

        let errors = validationResult(req);

        if (errors.isEmpty()) {
        const usersFilePath = path.join(__dirname, '..', 'data', 'users.json');

        let usuarios = JSON.parse(fs.readFileSync(usersFilePath, {encoding: 'utf-8'}))
        delete req.body.retype;
        let passCrypt = bcryptjs.hashSync(req.body.password, 10);
        let nuevoUsuario = {

            ...req.body,
            password: passCrypt

        };
        let newUsers = [...usuarios, nuevoUsuario];
        
        let usuarioJson = JSON.stringify(newUsers);
        
       

        fs.writeFileSync(usersFilePath, usuarioJson);

        return res.render('registerView');
        } else {
        return res.render ('registerView', {errors: errors.errors});
        }
    }   
}
    module.exports = registerController;