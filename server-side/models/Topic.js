import mongoose from "../config/connection"; //connecting to PauEnglish DB
//defining topic schema to structue collection of documents
const TopicSchema = new mongoose.Schema({
    id:{type: Number, required: true, unique: true}, // topic id where is stored
    topic: {type: String, required: true}, // topic name used to interact with openai server through controllers
});
const Topic = mongoose.model('Topic',TopicSchema);
module.exports = Topic;
