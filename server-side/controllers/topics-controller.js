//importing openAI server library
import OpenAI from "openai";
//request topic
export default function selectTopic(req,res){
    //send request to openai server
    let topic = req.params.id({
        id:'topic',
    })
}
// response topic, prepare answer with first message on the chat, conducted by model
export default async function getMessage(req,res,next){
    let message = await OpenAI.responses.create({
        model:"gpt-4.1",
        user:'chatbot',
        message:req.body,
        timestamp,
    })
}
