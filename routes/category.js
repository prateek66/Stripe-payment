const express = require('express')
const category = require('../controller/category')
const bodyparser = require('body-parser')

 module.exports = app => {
    const api = express.Router()

    app.post('/createCategory' , category.createCategory)
    //app.use('/',api)
   //app.get('/catbypost/:_id', category.getpostByCategories);


   app.use('/app', api);
    app.use(bodyparser.urlencoded({
      extended:true
    }))
 }