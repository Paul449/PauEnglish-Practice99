import mongoose from "../config/connection"; //connecting to PauEnglish DB
//import model from mongoose library to create my topic database and store each one
import { model,Schema } from "mongoose";
//defining topic schema to structue collection of documents
const TopicSchema = new Schema({
    id:{type: Number, required: true, unique: true},
    name: {type: String, required:true, unique: true},
});
const Topic = model('Topic',TopicSchema);
module.exports = Topic;
