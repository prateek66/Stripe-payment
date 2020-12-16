const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const PostSchema = new Schema({
  timestamp: {
    type: Date,
    default: Date.now
  },
  title: {
    type: String,
    default: '',
    trim: true,
    required: true
  },
  content: {
    type: String,
    default: '',
    required: true
  },
  author: {
    type: String,
    default:'',
    required:true
  },
  description: {
    type: String,
    default:'',
    required:true
  },
  ispublished:{
      type:Boolean,
      default:false
  },
  category:{
    type: Schema.Types.ObjectId, ref: 'Category'
  },
  uploads:{

  }
});


module.exports= mongoose.model('Post', PostSchema);