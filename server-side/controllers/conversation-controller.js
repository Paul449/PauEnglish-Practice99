//import message function to start conversation on selected topic
const {getMessage} = require('./topics-controller');
//connect openai client
//connect to openAI API
let openai = new OpenAI({
   apiKey:process.env.OPENAI_KEY
});
//import file system library
import fs from 'fs';
//request to server to talk about selected topic
 const getConversation = function(topic){

 }
//function to convert speech to text
async function textToSpeech(){
 let transcription = await openai.audio.transcriptions.create({
    file: fs.createReadStream(''),
    model:"gpt-4o-mini-transcribe",
    response_format:"text",
    prompt,
 })
}
//function to measure conversation time
function measureTime(minutes,seconds){
 //setTimeOut function to measure how long the conversation is
   setInterval((myTimer) => {
      console.log("Conversation ended");
   }, myTimer); // up to 10 minutes
}
//store conversation in database once conversation is over