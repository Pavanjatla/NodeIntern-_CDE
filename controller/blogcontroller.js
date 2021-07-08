const Blog= require('../models/blogmodel');

const blog_index =(req,res) =>{
    Blog.find()
    .sort({ createdAt : 1})
    .then((blogs) => res.render("home",{title:"home page" , blogs}))
    .catch((err)=>console.log(err));
};

const blog_details=(req,res)=>{
    Blog.findById(req.params.id)
    .then((blog) => res.render("home", {title : blog.title ,blog}))
    .catch((err)=>console.log(err));
};

const blog_create =(req,res)=>{
    res.render("create",{title : "new blog"});

};

const blog_post=(req,res)=>{
    console.log(req.body)
    Blog.create(req.body)
    .then(() => res.redirect("/blogs"))
    .catch((err) => console.log(err));
};

const blog_delete=(req,res)=>{
    Blog.findByIdAndDelete(req.params.id)
    .then(() => res.redirect("/blogs"))
    .catch((err) => console.log(err));
};


module.exports={
    blog_create,
    blog_delete,
    blog_details,
    blog_index,
    blog_post,
}
