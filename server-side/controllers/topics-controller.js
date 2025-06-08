// request topic, prepare answer with initial message on the chat
async function getMessage(req,res,next){
    let message = await req.params({
        user:'chatbot',
        message:req.body.params,
        timestamp,
    })
}
