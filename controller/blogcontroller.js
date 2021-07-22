const Blog = require("../models/blogmodel");

const handleErrors = (err) => {
  let errors = {
    title: "",
    snippet: "",
    body: "",
  };

  if (err.code === 11000) {
    errors.title = "That Title is already in use";
  }

  if (err.message.includes("validation failed")) {
    Object.values(err.errors).forEach(({ properties }) => {
      errors[properties.path] = properties.message;
    });
  }

  return errors;
};

const blog_index = (req, res) => {
  Blog.find()
    .sort({ createdAt: 1 })
    .then((blogs) => {
      res.render("home", { title: "Home", blogs });
    })

    .catch((err) => console.log(err));
};

const blog_details = (req, res) => {
  Blog.findById(req.params.id)
    .then((blog) => res.render("details", { title: blog.title, blog }))
    .catch((err) => console.log(err));
};

const blog_create = (req, res) => {
  res.render("create", { title: "New Blog" });
};

const blog_post = (req, res) => {
  Blog.create(req.body)
    .then((blog) => {
      res.json({ blog: "Blog Create Successfully" });
    })
    .catch((err) => {
      console.log(err);
      const errors = handleErrors(err);
      res.json({ errors });
    });
};

const blog_update_post = async (req, res) => {
  const blog = await Blog.findById(req.params.id);
  if (blog) {
    
    blog.title = req.body.title || blog.title;
    blog.snippet = req.body.snippet || blog.snippet;
    blog.body = req.body.body || blog.body;

    const updatedBlog = await blog.save();

    
    if (updatedBlog) {
      res.json({ updatedBlog });
    } else {
      
      res.send({ error: "Blog Found but Update Error" });
    }
  } else {
    
    res.send({ error: "Blog Not Found" });
  }
};

const blog_delete = (req, res) => {
  
  Blog.findByIdAndDelete(req.params.id)

    .then(res.json({ redirect: "/blogs" }))
    .catch((err) => console.log(err));
};

module.exports = {
  blog_index,
  blog_details,
  blog_create,
  blog_post,
  blog_update_post,
  blog_delete,
};
