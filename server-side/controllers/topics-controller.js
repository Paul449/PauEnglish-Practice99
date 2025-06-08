
//request topic
export default function selectTopic(req,res){

}
// request topic, prepare answer with initial message on the chat
export default async function getMessage(req,res,next){
    let message = await req.params({
        user:'chatbot',
        message:req.body,
        timestamp,
    })
}
