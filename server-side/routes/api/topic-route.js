//import express
const express = require('express');
//import router
const Router = express.Router();
//list all topics
Router.get('/api/topics');
//find specific topic, like history conversation for example
Router.get('/api/topics/History');
//search for specific word discussed on the conversation, example
Router.get('/api/topics/History/war');
//export topic route
export default Router