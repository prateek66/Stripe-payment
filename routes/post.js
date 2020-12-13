const blogPost = require('../controller/blog-post')
const express = require('express')

module.exports = app => {

  // api routes
  const apiRoutes = express.Router();
  //const app = express.Router();


   
  /********************************
  === post endpoints
  ********************************/

  // append user routes to api routes
  //apiRoutes.use('/posts', app);

  // get all posts
  app.get('/getPost', blogPost.getAllPosts);

  // get user by id
  app.get('/user/:id', blogPost.getPostById);

  // create user
  app.post('/create', blogPost.createPost);

  // update user by id
  app.put('/update/:id', blogPost.updatePost);

  // delete user by id
  app.delete('/delete/:id', blogPost.deletePost);


  /********************************
  === append apiRoutes to app
  ********************************/

  app.use('/api', apiRoutes);

};