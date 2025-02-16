import mongoose from "../config/connection";
/*

*/
const converschema = new mongoose.Schema({
    _id: { //conversaton id saved in whole database
        type: Number,
        required: true,
        unique: true
        },
    title: { // name of the topic discussed
        type: String, // datatype string
        required: true // must have a particular name when creating new document
    },
    time:{ //timestamp
        type: Date, // defining datatype of date
        default: Date.now
    },
    video:{ // video recorded from conversation with AI chatbot
        videoTitle:{type: String},
        filename:{type:String},
        size: {type:Number}
    },
    feedback:{
        score:{
            type: String,
            required: true
            
        },
        comment:{
            type: String, // feedback message
            required: true,
            minlength: 255, // minimum length of feedback message meeting the minimum of 255 characters
            maxlength: 1000 // maximum length of feedback message up to 1000 characters
        },
        path:'_id'
    }

})
const Conversation = mongoose.model('conversation', converschema);
module.exports = Conversation;