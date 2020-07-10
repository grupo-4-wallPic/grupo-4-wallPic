const fs = require ('fs');
const path = require ('path');
// const { json } = require('express');
// const { delete } = require('../routes/homeRoutes');
const {validationResult} = require('express-validator')
const json = require ('../custom-module/custom-json')
const users = json('users')

module.exports = {
    index: (req, res) => {

        return res.render('loginView')
    },
    login: (req, res) => {
        let errors = validationResult(req);

        if (errors.isEmpty()) {
            let user = users.findBySomething(user => user.email == req.body.email);

      delete user.password;

      req.session.user = user; // YA ESTÁ EN SESION

      if (req.body.remember) {
        // Creo la cookie

        res.cookie('email', user.email, { maxAge: 1000 * 60 * 60 * 24 });

      }
        return res.redirect('/');
        } else {
        return res.render('loginView', {errors: errors.mapped(), old:req.body});
        }   
    },
    
}
