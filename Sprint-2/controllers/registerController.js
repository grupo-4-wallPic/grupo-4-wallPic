const fs = require ('fs');
const path = require ('path');

const registerController = {

    index: (req, res) => {

        return res.render('registerView')
    }
};
    module.exports = registerController;