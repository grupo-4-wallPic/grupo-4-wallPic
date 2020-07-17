const db = require('../database/models');
const Op = db.Sequelize.Op



module.exports = {

    main: (req, res) => {
        res.render('adminForms')
    },

    newProduct: (req, res, next) => {
        db.Products.create({
            name       : req.body.name,
            description: req.body.description,
            images     : req.files[0].filename,
            categoryId : req.body.category
        })
        res.redirect('/admin')
    },

    newColor: (req, res) => {
       
        db.Colors.create({
            color: req.body.color
        })
        
        res.redirect('/admin') 
       
    },

    newSize: (req, res) => {
        db.Sizes.create({
            size : req.body.size,
            price: req.body.price
        })
        
        res.redirect('/admin') 
    },
    
    newCategory: (req, res) => {
        db.Categories.create({
            name: req.body.name
        })
        
        res.redirect('/admin') 
    },

}