const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.sendFile("./views/home.html", { root: __dirname });
});

app.get('/about', (req, res) => {
  res.sendFile('./views/about.html', { root: __dirname });
});

app.get('/about-me', (req, res) => {
  res.redirect('about');
});

app.get('*', (req, res) => {
  res.sendFile('./views/error.html', { root: __dirname });
});


app.listen(4000, () => {
  console.log(" port listening")
});