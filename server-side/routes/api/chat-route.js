//import express router to define path for conversation of selected topic
const Router = require('express').Router();
//import conversation function to define chat route
import conversation from '../../controllers/conversationController';
//
Router.get('/chat')