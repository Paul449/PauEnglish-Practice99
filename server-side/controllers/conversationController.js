//importing topic controller
import selectTopic from '../services/topics-service.js'
import openai from '../config/openai.js'

//generate conversation by requesting to openai server about selected topic and generate message
//POST method
 const createConversation = async function(req,res){
   try {
     // Get topic from request body, or use a default
     const topic = await selectTopic(req.body.topic || 'General');
     
     const conversation = await openai.chat.completions.create({
       model: 'gpt-4',
       metadata: {topic: topic},
       messages:[
         {
           role:'assistant',
           content:'you are a knowledgeable conversation partner for English practice'
         },
         {
           role:'user',
           content: req.body.message || 'hello everyone'
         }
       ],
       store:true
     });

     // Log the actual message content
     console.log('Generated response:', conversation.choices[0].message.content);
     
     // Send response to client
     res.status(200).json({
       success: true,
       conversation: conversation,
       message: conversation.choices[0].message.content
     });
   } catch(error) {
     console.error('Error generating message:', error);
     res.status(500).json({
       success: false,
       error: 'Failed to generate conversation',
       details: error.message
     });
   }
 }

 //save conversation on the mongoDB database
 
 function saveConversation(converID){
    //insert one
 }
 //retrieve conversation from database, mongodb
 function getConversation(){

 }
 //delete conversation from mongoDB database
 function deleteConversation(){

 }
 //export conversation controller into a route
module.exports = {
   createConversation,
   saveConversation,
   getConversation,
   deleteConversation
};