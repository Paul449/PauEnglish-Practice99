//importing topic controller
import selectTopic from "./services/topics-service.js"
// response topic, prepare answer with first message on the chat, conducted by model
async function getMessage(req,res){
    try{
        if(!req.body){
         return res.status(404).json({
            message:'request body is required',
            status:'error'
         })
        }
        //calling topic function which takes a topic from json database to generate a message according to the topic chosen
        selectTopic();
        let completion = await openai.chat.completions.create({
         model: "gpt-4",
         messages:[{
            role: "user",
            content:req.body.message || jsonData[key].starterQuestions,
        }],
        //controlling maximum length of API response up to 1000 characters
        max_tokens: 1000,
        //controlling which words does gpt model is going to use to send me a response
        temperature: 0.7
    })
    //throw error in case message does not arrive
    if(!message){
      throw new error('no response received from AI');
    }
    const message = completion.choices[0]?.message?.content;
    console.log('AI response',message)
    res.status(200).json({
        message:message,
        status:"success"
    });
    }catch(error){
        console.error('something unexpectedly occured',error);
        //server status
        res.status(500).json({
         message:'Failed to get AI response',
         status:'internal server error',
         error: error.message
        })
    }
}
//generate conversation by requesting to openai server about selected topic and generate message
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
   