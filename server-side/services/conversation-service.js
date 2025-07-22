//importing topic controller
// response topic, prepare answer with first message on the chat, conducted by model
//request to server to talk about selected topic
 const getConversation = async function(){
   const conversation = await getMessage({
      id: topic,
      title: jsonData[key].title,
      messages:[{
         role: 'user',
         content:jsonData[key].systemPrompt
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


