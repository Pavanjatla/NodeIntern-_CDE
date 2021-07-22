const jwt = require("jsonwebtoken");
const User = require("../models/usermodel");



const maxAge = 3 * 24 * 60 * 60 * 1000;
const createToken = (id) => {
  return jwt.sign({ id }, process.env.SECRET, { expiresIn: maxAge });
};

const user_create = (req, res) => {
  res.render("sign-up", { title: "Create A User" });
};

const user_login = (req, res) => {
  res.render("log-in", { title: "Login User" });
};

const user_create_post = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.create({ email, password });
    const token = createToken(user._id);
    res.cookie("BlogCookie", token, { httpOnly: true, maxAge: maxAge });
    res.status(201).json({ user: user._id });
  } catch (err) {
    const errors = handleErrors(err);
    res.status(400).json({ errors });
  }
};

const user_login_post = async (req, res) => {
  const { email, password } = req.body;
  console.log(req.body);
  try {
    const user = await User.login(email, password);
    const token = createToken(user._id);
    res.cookie("BlogCookie", token, { httpOnly: true, maxAge: maxAge });
    res.status(201).json({ user: user._id });
  } catch (err) {
    console.log(err);
    const errors = handleErrors(err);
    res.status(400).json({ errors });
  }
};

const user_log_out = (req, res, next) => {
  res.cookie("BlogCookie", "", { httpOnly: true, maxAge: 1 });
  res.redirect("/log-in");
  next();
};


module.exports = {
  user_create,
  user_create_post,
  user_login,
  user_login_post,
  user_log_out,
};