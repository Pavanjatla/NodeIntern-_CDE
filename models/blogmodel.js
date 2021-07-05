const Mongoose = require('mongoose');
const Schema = Mongoose.Schema;

const blogSchema=new Schema({
    title:{
        type: String,
        required: true,
        unique: true,
    },
    snippet:{
        type: String,
        required: true,
    },
    body:{
        type: String,
        required: true,
    },
    phnum:{
        type: Number,
        default: 145277365,
        maxLength: 10,
        minLength: 10,
    },
});

const Blog=Mongoose.model('Blog',blogSchema);
module.exports=Blog;