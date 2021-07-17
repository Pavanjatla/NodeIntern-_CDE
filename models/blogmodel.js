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
});

const Blog=Mongoose.model("Blog",blogSchema);
module.exports=Blog;