
const express = require('express');
const path = require('path');

const homeRoutes = require('./routes/homeRoutes');
const categoryRoutes = require ('./routes/categoryRoutes');
//const productRoutes = require ('./routes/productRoutes')

const app = express();

app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));  

app.listen(3000, () => console.log('running on 3000'));

app.use('/', homeRoutes);
app.use('/products/category', categoryRoutes);
//app.use('/products/detail/:id', productRoutes);


// module.exports = app;