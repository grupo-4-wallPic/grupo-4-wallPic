
const express = require('express');
const path = require('path');
const methodOverride = require('method-override')

const homeRoutes = require('./routes/homeRoutes');
const categoryRoutes = require ('./routes/categoryRoutes');
//const productRoutes = require ('./routes/productRoutes')

const app = express();

app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));  
app.use( methodOverride('_method'))

app.listen(3030, () => console.log('running on 3030'));

app.use('/', homeRoutes);
app.use('/products/category', categoryRoutes);
//app.use('/products/detail/:id', productRoutes);


// module.exports = app;