// import dotenv
import dotenv from 'dotenv';
dotenv.config();
//importing chat and topic routes
//import conversationRoute from './routes/index'
//import topicRoute from './routes/index'
//import express
import express from 'express';
//import openai client
import OpenAI from 'openai';
//openai client
export const openai = new OpenAI({
   apiKey: process.env.OPENAI_API_KEY
})
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

