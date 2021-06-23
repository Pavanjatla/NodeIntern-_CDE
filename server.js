const http= require("http");
const fs= require("fs");
const server=http.createServer((req,res) =>{
   res.setHeader("contenttype","text/html");
   let path="./views";

   switch(req.url)
   {
       case "/":
           path+="/home.html";
           res.statusCode=200;
           break;
        
       case "/about":
            path+="/about.html";
            res.statusCode=200;
            break;

        default:
            path+="/error.html"
            res.statusCode=200;
            break;

   }
   fs.readFile(path,(err,data) => {
       if(err){
           console.log(err);
           res.end();
       }
       res.end(data);
   })
});


server.listen(4000,"localhost",() =>{
    console.log("listening to port");
});