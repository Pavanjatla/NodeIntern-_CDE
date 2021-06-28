const express = require('express')
const app = express()

app.set("view engine","ejs")

app.get('/', (req, res) => {
  res.render("home", { title: "home page" });
});

app.get('/about', (req, res) => {
  res.render("about");
});

app.get('/about-me', (req, res) => {
  res.redirect('about');
});

app.get('*', (req, res) => {
  res.render("error")
});


app.listen(4000, () => {
  console.log(" port listening")
});