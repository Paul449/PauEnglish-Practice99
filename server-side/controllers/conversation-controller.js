// response topic, prepare answer with first message on the chat, conducted by model
export default async function getMessage(req,res,next){
    try{
        let completion = await openai.chat.completions.create({
         model: "gpt-4",
         messages:[{
            role: "user",
            message:req.body.message || req.body.content
        }]
    })
    const message = completion.choices[0].message.content
    res.status(200).json({
        message:message,
        status:"success"
    });
    }catch{
        console.error("Error message");
    }
}
//request to server to talk about selected topic
 const getConversation = function(topic){
 
   const conversation =  getMessage({
      id: topic,
      messages:[{
         role: 'user',
         message: content
      }]
   })
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
 } else if(minutes < 10){
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