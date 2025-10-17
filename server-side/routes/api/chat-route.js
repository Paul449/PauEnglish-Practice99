const express = require('express');
//import express router to define path for conversation of selected topic
const Router = express.Router();
//import conversation function to define chat route
import { createConversation, getConversation, deleteConversation } from '../controllers/conversationController.js';
//create chat once topic was selected
Router.post('/api/chat',createConversation);
//retrieve conversation with chatbot
Router.get('/api/chat/conversation/:id',getConversation);
//delete conversation from chat
Router.delete('/api/chat/conversation/:id',deleteConversation);
//export chat route
export default Router;