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
function measureTime(minutes){
 //setTimeOut function to measure how long the conversation is
 if(minutes > 10){
    console.log("Conversation ended due to time limit");
    return;
 } else if(minutes <= 10){
    console.log("Conversation is still ongoing");
    return;
 } else{
      return;
 }
}
setInterval((measureTime) => {
      console.log("Conversation ended");
   }, 60000); // up to 10 minutes

//store conversation in database once conversation is over