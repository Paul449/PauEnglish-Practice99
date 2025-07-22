async function getMessage(req,res,next){
    try{
        let completion = await openai.chat.completions.create({
         model: "gpt-4",
         messages:[{
            role: "user",
            content:req.body.message || jsonData[key].startedQuestions,
        }]
    })
    const message = completion.choices[0].message.content
    console.log(completion.model)
    console.log(message)
    res.status(200).json({
        message:message,
        status:"success"
    });
    }catch(error){
        console.error('something unexpectedly occured',error);
        //server status
        res.status(500).json({
         message:'Failed to get AI response',
         status:'internal server error',
         error: error.message
        })
    }
}