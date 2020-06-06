const createError = require('http-errors');
const cookieParser = require('cookie-parser');
const express = require('express');
const logger = require('morgan');
const path = require('path');
const session = require('express-session')

const app = express();

app.use(express.static(path.join(__dirname, 'public')));  
app.use(express.urlencoded({ extended: false }));
app.use(logger('dev'));
app.use(express.json());
app.use(cookieParser());



module.exports = app;