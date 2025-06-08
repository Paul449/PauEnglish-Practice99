// import file system
import fs from 'fs';
//run dotenv
import 'dotenv/config';

/*small section to test speech to text packages configuration

*/
//connect to openAI API
let openai = new OpenAI({
   apiKey:process.env.OPENAI_KEY
});
//import HTTP requests
import HTTP from 'http';

//import express
import express from 'express';
//create app
let app = express();
//define port number
let PORT = process.env.PORT || 3000;
app.use((req,res,next)=>{ //middleware from client to pauEnglish
   next();
});

app.get('/',(req,res)=>{
   res.send('hello')
});
//test
app.listen(PORT,()=>{
 console.log(`listening on http://localhost:${PORT}`)
})

