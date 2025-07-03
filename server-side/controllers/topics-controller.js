//importing openAI server library
import OpenAI from "openai";
let openai = new OpenAI({
   apiKey:process.env.OPENAI_KEY
});
//import file system library
import fs from 'fs';
//request topic
function selectTopic(req,res){
    //send request to openai server
    let topic = req.params.id({
        id:'topic',
    })
}
// response topic, prepare answer with first message on the chat, conducted by model
export default async function getMessage(req,res,next){
    try{
        let completion = await openai.chat.completions.create({
         model: "gpt-4",
         messages:[{
            role: "user",
            message:req.body.message || req.body.content
        }]
    })
    const message = completion.choices[0].message.content
    res.status(200).json({
        message:message,
        status:"success"
    });
    }catch{
        console.error("Error message");
    }
}
