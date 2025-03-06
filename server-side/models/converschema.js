const {mongoose} = require("../config/connection.js");
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
        required: true,// must have a particular name when creating new document
        trim:true
    },
    time:{ //timestamp
        type: Date, // defining datatype of date
        default: Date.now
    },
    video:{ // video recorded from conversation with AI chatbot
        videoTitle:{type: String, trim:true},
        filename:{type:String, trim:true},
        size: {type:Number, min:0},
        url:{ type:String, trim:true},
        duration:{type:Number, min:0},
        format:{type:String, trim:true}
    },
    feedback:{ // feedback provided to me after finishing conversation with chatbot
        score:{
            type: Number, // score will be provided
            min: 1, // minimum score of 0
            max: 10, // maximum score of 10
            required: true  
        },
        comment:{
            type: String, // feedback message
            required: true,
            minlength: 255, // minimum length of feedback message meeting the minimum of 255 characters
            maxlength: 1000 // maximum length of feedback message up to 1000 characters
        },
    
    }

})
const Conversation = mongoose.model('conversation', converschema);
module.export = Conversation;