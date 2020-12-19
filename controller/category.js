const Category = require('../schema/category')
const post = require('../schema/blogs')

exports.createCategory = async(req,res,next)=>{
const title = req.body.title
const category = new Category({
    title
    
  })
  console.log(category)
    category.save()
   .then((category) => {
    res.status(201).json({ category });
  })
  .catch((err) => {
    res.status(500).json({ err });
  })

}

 exports.getpostByCategories = (req, res)=> {
   const _id = req.params._id
   console.log(_id)
   Category.find({post:_id}).populate('post')
   .then((category) => {
     console.log(category)
     res.status(200).json({ category });
   })
   .catch((err) => {
     res.status(500).json({ err });
   })
 }