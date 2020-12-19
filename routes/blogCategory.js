const express = require('express')
const category = require('../controller/blogCategories')
const bodyparser = require('body-parser')


module.exports = app => {
    const api = express.Router()

    //getCategories
    app.get('/getAllCategories', category.getAllCategories)

    app.get('/',category.demo)


    //create category
    app.post('/createCategory', category.createNewCategory)
    //app.use('/',api)

    app.use('/api', api);
    app.use(bodyparser.urlencoded({
        extended: true
    }))
}
