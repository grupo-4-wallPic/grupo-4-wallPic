const fs = require ('fs');

const leerJson = fs.readFileSync('productsWallpicDataBase.json', {encoding: 'utf-8'})
const products = JSON.parse (leerJson);

module.exports = {
    root: (req, res) => {
        let unProducto = products.find (function (product) {
            return product.id == req.query
        })
    return res.render ('product', {unProducto});
    }
}