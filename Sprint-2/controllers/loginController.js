const fs = require ('fs');
const path = require ('path');
// const { json } = require('express');
// const { delete } = require('../routes/homeRoutes');
const bcryptjs = require('bcryptjs')
const {validationResult} = require('express-validator')

module.exports = {

    login: (req, res) => {
       const usersFilePath = path.join(__dirname, '..', 'data', 'users.json');

        let usuarios = JSON.parse(fs.readFileSync(usersFilePath, {encoding: 'utf-8'}))

       return res.render('/')

    },

    register: (req, res) => {

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

        
        return res.redirect('/');
        }else {
            console.log(errors.errors)
            return res.redirect('/', {errors: errors.errors})
        }
    }

}