const jwt = require("jsonwebtoken");
const User = require("../models/usermodel");


const user_create = (req, res) => {
  res.render("sign-up", { title: "Create A User" });
};

const user_login = (req, res) => {
  res.render("log-in", { title: "Login User" });
};

const user_create_post = async (req, res) => {
  console.log(req.body);
  console.log("user created here");
  
  
};

const user_login_post = async (req, res) => {
  console.log(req.body);
  console.log("post created here");
  
};


module.exports = {
  user_create,
  user_create_post,
  user_login,
  user_login_post,
};