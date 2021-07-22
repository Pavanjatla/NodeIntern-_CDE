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


blogSchema.pre("save", async function (next) {
    console.log("New Blog is being saved");
    next();
  });
  
  blogSchema.post("save", function (doc, next) {
    console.log("Blog is saved successfully");
    next();
  });

const Blog=Mongoose.model("Blog",blogSchema);
module.exports=Blog;