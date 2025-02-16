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
        type: String,
        required: true
    },
    time:{ //timestamp
        type: Date, // defining datatype of date
        default: Date.now
    },
    video:{
        videoTitle:{type: String},
        filename:{type:String},
        size: {type:Number}
    },
    feedback:{
        level:{
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