const Post = require('../schema/blogs')

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
  const author = req.body.author

  if (!title || !content ||!author) {
    res.status(500).json({ error: 'All Fields Are Required.' });
  }

  const post = new Post({
    title,
    content,
    author
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