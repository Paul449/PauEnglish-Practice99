const express = require('express');
//import express router to define path for conversation of selected topic
const Router = express.Router();
//import conversation function to define chat route
//import conversation from '../../controllers/conversationController';
//create chat once topic was selected
Router.post('/api/chat');
//retrieve conversation with chatbot
Router.get('/api/chat/conversation/:id');
//delete conversation from chat
Router.delete('/api/chat/conversation/:id');
//export chat route
export default Router;