const Category = require('../schema/category')

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