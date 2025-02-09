import mongoose from "../config/connection";

const converschema = new mongoose.Schema({
    converID: {type:Number, required:true, unique:true},
})
const Conversation = mongoose.model('conversation', converschema);
module.exports = Conversation;