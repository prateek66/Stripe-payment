const mongoose = require('mongoose')
const Schema = mongoose.Schema

const category = new Schema({
    _id: mongoose.Schema.Types.ObjectId,
        title:{
            type:String
        }
    ,
    post: {
        type:mongoose.Schema.Types.ObjectId,
        ref:'blogs'
    }
})    


