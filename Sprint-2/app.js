
const express = require('express');
const path = require('path');
const methodOverride = require('method-override')

const homeRoutes = require('./routes/homeRoutes');
const categoryRoutes = require ('./routes/categoryRoutes');
const productRoutes = require ('./routes/productRoutes');
const session = require ('express-session');
const cookieParser = require ('cookie-parser')
const log = require ('../Sprint-2/middlewares/log')

const app = express();

app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));  
app.use( methodOverride('_method'))
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(session({secret:"Wallpic's Secrets"}));
app.use (cookieParser());
app.use (log);

app.listen(3030, () => console.log('running on 3030'));

app.use('/', homeRoutes);
app.use('/category', categoryRoutes);
app.use('/products', productRoutes);


// module.exports = app;