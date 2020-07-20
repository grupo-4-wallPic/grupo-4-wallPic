const db = require('../database/models');
const Op = db.Sequelize.Op;

module.exports = {

    category: (req, res) => {
        db.Categories.findAll()
            .then(category => {
                res.send(category)
            })
    },

    color: (req, res) => {
        db.Colors.findAll()
            .then(category => {
                res.send(category)
            })
    },

    product: (req, res) => {
        db.Products.findAll()
            .then(category => {
                res.send(category)
            })
    },

    size: (req, res) => {
        db.Sizes.findAll()
            .then(category => {
                res.send(category)
            })
    },

}