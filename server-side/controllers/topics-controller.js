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

