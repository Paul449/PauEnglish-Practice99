// import file system
import fs from 'fs';
//run dotenv
import 'dotenv/config';

/*small section to test speech to text packages configuration

*/

//import HTTP requests
import HTTP from 'http';

//import express
import express from 'express';
//create app
let app = express();
//define port number
let PORT = process.env.PORT || 3000;
app.use((req,res,next)=>{ //middleware from client to pauEnglish
   let message = req.params({
        user:'chatbot',
        message:req.body,
        timestamp,
    })
    messsage.json();
    console.log(message);
});

app.get('/',(req,res)=>{
   res.send('hello')
});
//test
app.listen(PORT,()=>{
 console.log(`listening on http://localhost:${PORT}`)
})

