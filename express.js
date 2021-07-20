const express = require('express')
const Mongoose  = require('mongoose')
const app = express()
const morgan=require('morgan')
const blogrouter=require('./routes/blogrouter')
const userrouter=require('./routes/userrouter')
const Blog=require('./models/blogmodel')


app.set("view engine","ejs")
app.use(express.static("public"));
app.use(express.json())
app.use(express.urlencoded({extended:true}))

require("dotenv").config();

Mongoose
    .connect(process.env.MONGO_URL, {
      useNewUrlParser:true,
      useUnifiedTopology:true,
      useFindAndModify:true,
      useCreateIndex:true,
    })
    .then((result) => app.listen(process.env.PORT,()=>{
      console.log("listening to port");
     })
    )
    .catch((err) =>console.log(err));

app.use(morgan("dev"));
app.use("/blogs", blogrouter);
app.use(userrouter);

app.get('/add-blog',(req,res) => {
  const blog = new Blog({
    
    title:"this is title",
    snippet:"this is snip",
    body:"this is body",
    phnum:"8746512846",

  });
  blog
    .save()
    .then((result)=>{
      res.send(result);
    })
    .catch((err)=>{
      console.log(err);
    })
})

app.get('/get-blog/:id',(req,res)=>{
  Blog.findById(req.params.id)
  .then((result) =>{
    res.send(result);
  })
  .catch((err) =>{
    console.log(err);
  });
});

app.get('/del-blog/:id',(req,res)=>{
  Blog.findByIdAndDelete(req.params.id)
  .then((result) =>{
    res.send("delete");
  })
  .catch((err) =>{
    console.log(err);
  });
});

app.get("/", (req, res) => {
  Blog.find({})
    .then((result) =>{
      res.render("home", { title: "home page" , blogs : result});  
    }) 
    .catch((err)=>{
      console.log(err);
    });
});

app.get('/about', (req, res) => {
  res.render("about",{ title: "About page" });
});



app.get('*', (req, res) => {
  res.render("error",{ title: "Error page" })
});
