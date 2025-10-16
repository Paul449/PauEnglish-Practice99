//importing topic controller
import selectTopic from '../services/topics-service.js'
import openai from '../config/openai.js'
import conversation from '../models/converschema.js'
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
 
 async function saveConversation(converID){
    //insert one
    try {
      const newConversation = await conversation.create({
         _id: converID,
         title: 'Sample Conversation Title',
         time: Date.now(),
         feedback:{score: 8, comment: 'Great conversation! Very engaging and informative.'},
         comment: 'This is a sample comment for the conversation.'
      })    
    } catch (error) {
      console.error('Error saving conversation:', error);
      throw new Error('Failed to save conversation');
    }
 }
 //retrieve conversation from database, mongodb
 async function getConversation(){
   try {
      //identify conversation by ID
      const conversationID = await conversation.find({_id: converID});
      //if conversation exists, return conversation
      if(conversationID){
         return conversationID;
      } else {
         throw new Error('Conversation not found');
      }
      
   } catch (error) {
      console.error('Error retrieving conversation:', error);
      throw new Error('Failed to retrieve conversation');
   }
 }
 //delete conversation from mongoDB database
 function deleteConversation(){
   try {
      
   } catch (error) {
      
   }
 }
 //export conversation controller into a route
module.exports = {
   createConversation,
   saveConversation,
   getConversation,
   deleteConversation
};