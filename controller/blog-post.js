const { json } = require('body-parser');
const { db } = require('../schema/blogs');
const blogs = require('../schema/blogs');
const Post = require('../schema/blogs')
const Category = require('../schema/category')


// get all posts
exports.getAllPosts = (req, res, next)=> {
  Post.find()
  .then((posts) => {
    res.status(200).json({ posts });
  })
  .catch((err) => {
    res.status(500).json({ err });
  })
}

// get one post by id
exports.getPostById =(req, res, next)=> {
  const id = req.params.id;

  Post.findById(id)
  .then((posts) => {
    res.status(200).json({ posts });
  })
  .catch((err) => {
    res.status(500).json({ err });
  })
}

// create post
exports.createPost= (req, res, next)=> {
  const title = req.body.title;
  const content = req.body.content;
  const author = req.body.author;
  const category = req.body.category;

  if (!title || !content ||!author ||!category ) {
    res.status(500).json({ error: 'All Fields Are Required.' });
  }

  const post = new Post({
    title,
    content,
    author,
    category
  });

  post.save()
  .then((post) => {
    res.status(201).json({ post });
  })
  .catch((err) => {
    res.status(500).json({ err });
  })
}


// update post by id
exports.updatePost= (req, res, next) => {
  const id = req.params.id;

  Post.findByIdAndUpdate(id, req.body)
  .then((post) => {
    res.status(200).json({ post });
  })
  .catch((err) => {
    res.status(500).json({ err });
  })
}


// delete post by id
exports.deletePost = (req, res, next)=> {
  const id = req.params.id;

  Post.findByIdAndRemove(id)
  .then((post) => {
    res.status(204).json({ post });
  })
  .catch((err) => {
    res.status(500).json({ err });
  })
}

// image upload
//  exports.documentUpload  = async (req, res) =>{

//    console.log(req.file.path);
//    var img = req.file.path
//    const url = 'http://localhost:3000/'+img
//     res.send('file uploaded succesfully'+ url)
//  }
exports.getpostByCategories = async(req, res)=> {
   const _id = req.params._id
   try{
     const category = await Category.findById(_id)
     console.log(category)
    const title = category.title
     Post.find({category:_id})
   .then((posts) => {
     console.log(posts)
     res.status(200).json({ [title]:posts });
   })
   .catch((err) => {
     res.status(500).json({ err });
   })
   }catch(e){
     res.send(e)
   }
   
 }

  

