
const express = require('express');
const path = require('path');
const methodOverride = require('method-override')

const homeRoutes = require('./routes/homeRoutes')

const app = express();

app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));  
app.use( methodOverride('_method'))

app.listen(3000, () => console.log('running on 3000'));

app.use('/', homeRoutes);


// module.exports = app;