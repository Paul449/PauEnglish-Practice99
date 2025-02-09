//import OpenAI
let OpenAI = require('openai');
// import file system
let fs = require('fs');
//run dotenv
let dotenv = require('dotenv').config();
/*small section to test speech to text packages configuration

*/
//conect to openAI API
let openai = new OpenAI({
   apiKey:process.env.OPENAI_KEY
});
//import HTTP requests
let HTTP = require('http');

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

// short test how to convert audio to text
/*
async function audioToText(){
 let transcription = await openai.audio.transcriptions.create({
    file:fs.createReadStream('./demo.mp3'),
    model:"whisper-1"
 });
 console.log(transcription);
}
audioToText();
*/
//short test on how to convert speech to text