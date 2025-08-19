const express = require('express');
//import express router to define path for conversation of selected topic
const Router = express.Router();
//import conversation function to define chat route
import conversation from '../../controllers/conversationController';
//display conversation
Router.get('/chat', conversation);
//create conversation
//export chat route
export default Router;