const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const fs = require('fs');
require('./db/mongoose')


const post = require('./routes/post');
const category = require('./routes/category')


const app = express();


app.use('/', post);
app.use('/category' , category)


module.exports = app;