const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true,
    },
    body: { type: String, 
        required: true },
    photo: String,
    author: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    tags:{
        type:[String],
        // required:true
    }
}, { timestamps: true });//add two fields createdAt and updatedAt date and time 


const Blog = mongoose.model('Blog', blogSchema);
Blog.createIndexes({title:1});// it make title as uniqe for search for
//it useing find faster

module.exports = Blog;

