
//importing chat and topic routes
//import conversationRoute from './routes/index'
//import topicRoute from './routes/index'
import dotenv from 'dotenv';
dotenv.config();
//import express
import express from 'express';
//create app
let app = express();
//define route handling method from chat and topic routes
app.use();
//define port number
let PORT = process.env.PORT || 3000;
app.use((req,res,next)=>{ //middleware from client to pauEnglish
  
});

app.get('/',(req,res)=>{
   res.send('hello')
   
});
//test
app.listen(PORT,()=>{
 console.log(`listening on http://localhost:${PORT}`)
})

