import mongoose from "../config/connection";
import {type} from 'mongoose';
/*


*/
const converschema = new mongoose.Schema({
    _id: { //conversaton id saved in whole database
        type: Number,
        required: true,
        unique: true
        },
    name: { // name of the topic discussed
        type: String,
        required: true
    },
    time:{ //timestamp
        type: Date,
        default: Date.now
    },
    feedback:{
        level:{
            type: String,
        },
        comment:{
            type: String, // feedback message
            required: true,
            minlength: 250, // minimum length of feedback message
            maxlength: 500 // maximum length of feedback message
        },
        path:'_id'
    }

})
const Conversation = mongoose.model('conversation', converschema);
module.exports = Conversation;