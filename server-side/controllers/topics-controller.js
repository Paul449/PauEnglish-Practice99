//import file system library
import fs from 'fs';
//request topic
function selectTopic(){
    try{
       let data = fs.readFileSync('./topics.json','utf-8');
       let jsonData = JSON.parse(data);
       for(let key in jsonData){
        console.log(jsonData[key]);
       }
    }catch(error){
        console.error('something went wrong', error);
    }   
}

selectTopic();

