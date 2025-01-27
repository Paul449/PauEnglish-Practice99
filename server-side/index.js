//import HTTP requests
let HTTP = require('http');
//import api key
let secretKey = process.env.OPENAI_KEY;
//import express
let express = require('express');
//create app
let app = express();
//define port number
let PORT = process.env.PORT || 3000;
app.use(express.json());
app.get('/',(req,res)=>{res.send('hello')});
//test
app.listen(PORT,()=>{
 console.log(`listening on http://localhost:${PORT}`)
})