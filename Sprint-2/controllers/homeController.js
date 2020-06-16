const fs = require ('fs');
const path = require ('path');

const homecontroller = {

    main: (req, res) => {

    const productsFilePath = path.join(__dirname, '../productsWallpicDataBase.json');
    const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

    let mostsale = products.filter(function(product){
        return product.category == 'Mostsale'
    
    });
        return res.render('index', {mostsale})
    },
};
    module.exports = homecontroller;