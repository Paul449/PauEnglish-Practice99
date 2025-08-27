// import mongoose to connect with english app database
import mongoose from '../config/connection.js';
//importing topic controller
import selectTopic from "./services/topics-service.js"
//generate conversation by requesting to openai server about selected topic and generate message
//POST method
 const createConversation = async function(topic){
  try{
  const conversation = await openai.chat.completions.create({
   model: 'gpt-4',
   metadata: {topic:'History'},
   message:[
   {
      role:'assistant',
   },
   {
      role:'user',
      content:'hello everyone'
   }
],
   store:true
  })
  console.log(completions.choices[0].message.create);
  }catch(error){
   

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
