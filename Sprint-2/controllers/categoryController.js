const fs = require ('fs');

const leerJson = fs.readFileSync('productsWallpicDataBase.json', {encoding: 'utf-8'})
const products = JSON.parse (leerJson);

module.exports = {

    index: (req, res) => {
        let animales = products.filter (function (product) {
            return product.category == 'Animales'
        })

        return res.render('category', {animales})
    }
    
}