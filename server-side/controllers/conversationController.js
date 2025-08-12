//importing topic controller
import selectTopic from "./services/topics-service.js"
// response topic called generate message, prepare answer with first message on the chat, conducted by model
async function genMsg(req,res){
    try{
        if(!req.body){
         return res.status(400).json({
            message:'request body is required',
            status:'error'
         })
        }
        //calling topic function to select appropriate topic to discuss
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
    // get first response from gpt model since response choices are inside of an array
    const message = completion.choices[0]?.message?.content;
    //throw error in case message does not arrive or not generated
    if(!message){
      throw new Error('no response received from AI');
    }
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
 const conversation = async function(){
   try{
   const converAI = await genMsg(
      //request object of choosen topic
      { body:{topic:'History'}},
      //gpt model response after topic choosen in JSON format
      {status:()=>({json:{}})}
   )
   //print conversation
   console.log('chatting now',converAI);
   //throw error in case
   if(!converAI){
       throw new Error('topic not found, please chhose from the options at the menu');
   }
   res.status(200).json({
      message:converAI,
      status:'success'
   })
   }catch(error){
      console.error('oops something unexpected happened', error);
      res.status(500).json({
         message:'internal server error',
         status:error
      })
}
 }
 
function measureTime(){
   conversation(topic);
   const startTime = new Date();
 //conversation more than 10 minutes, finish conversation
 if(conversation > 600000){
    const endTime = new Date();
    const timeLimit = endTime - startTime;
    console.log('conversation time limit reached', timeLimit);
    // if conversation is less than time limit, make conversation still going
 } else if(conversation < 600000){
    console.log("Conversation is still ongoing");
    return;
 } else{
      return;
 }
}
setInterval(() => {
      console.log("Conversation ended", measureTime());
   }, 600000); // up to 10 minutes
   
//store conversation in a database