var http= require('http');
var fs = require ('fs');
/*
function onRequest(request, response) {
     response.writeHead(200, {'Contenty-Type':'text/html'});
     fs.readFile('./index.html',null,function(error,data){
     if (error){
          response.writeHead(404);
          response.write('File not found! ');
     } else{
          response.write(data);
     }
 response.end();
     });
}
http.createServer(onRequest).listen(5000);*/

// for testing the links page




/*
function onRequest(request, response) {
     response.writeHead(200, {'Contenty-Type':'text/javascript'});
     fs.readFile('./index1.js',null,function(error,data){
     if (error){
          response.writeHead(404);
          response.write('File not found! ');
     } else{
          response.write(data);
     }
 response.end();
     });
}
http.createServer(onRequest).listen(5000);*/


// code to link-check



const express = require('express');
const mongoose= require('mongoose')
const {MONGO_URI} = require('./config')

//Routes
const postRoutes= require('./routes/api/posts') 
const postRoutesEnv= require('./routes/api/posts') 

const app =express();

// middleware for handling body parser which we are getting undefined 
app.use(express.json());

// connect to db 
mongoose.connect(MONGO_URI, {
     useNewUrlParser: true,
     useUnifiedTopology: true,

})
.then(()=>console.log('Mongodb connected for sure'))
.catch(err=>console.log("error"))


// user routes
app.use('/api/posts/', postRoutes)
//app.use('/api/posts/tests', postRoutesEnv)  -- no need 

const PORT = process.env.PORT ||5001;
app.listen(PORT,()=>console.log(` server run at port ${PORT}` ));

