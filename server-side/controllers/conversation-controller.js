//importing topic controller
//import selectTopic from ' topics-controller.js'
//importing openAI server library
import OpenAI from "openai";
let openai = new OpenAI({
   apiKey:process.env.OPENAI_KEY
});
// response topic, prepare answer with first message on the chat, conducted by model
async function getMessage(req,res,next){
    try{
        let completion = await openai.chat.completions.create({
         model: "gpt-4.1",
         messages:[{
            role: "user",
            content:req.body.message || req.body.content,
        }]
    })
    const message = completion.choices[0].message.content
    console.log(message)
    res.status(200).json({
        message:message,
        status:"success"
    });
    }catch(error){
        console.error("Error message",error);
    }
}
//request to server to talk about selected topic
 const getConversation = function(){
 
   const conversation =  getMessage({
      id: topic,
      title: jsonData[key].title,
      prompts: jsonData[key].starterQuestions,
      messages:[{
         role: 'user',
         message: content
      }]
   })
 }
//function to convert speech to text
/*
async function textToSpeech(){
 let transcription = await openai.audio.transcriptions.create({
    file: fs.createReadStream(''),
    model:"gpt-4o-mini-transcribe",
    response_format:"text",
    prompt,
 })
}*/
//function to provide feedback on the conversation once it is overn
//function to measure conversation time
function measureTime(){
   getConversation(topic);
   const startTime = new Date();
 //conversation more than 10 minutes, finish conversation
 if(getConversation > 600000){
    const endTime = new Date();
    const timeLimit = endTime - startTime;
    console.log('conversation time limit reached', timeLimit);
    // if conversation is less than time limit, make conversation still going
 } else if(getConversation < 600000){
    console.log("Conversation is still ongoing");
    return;
 } else{
      return;
 }
}
setInterval(() => {
      console.log("Conversation ended", measureTime());
   }, 600000); // up to 10 minutes

//store conversation in database once conversation is over