//import file system library
import fs from 'fs';
//request topic
function selectTopic(topic){
    try{
       let data = fs.readFileSync('./topics.json','utf-8');
       let jsonData = JSON.parse(data);
       for(let key in jsonData){
        if(key === topic){
          topic = jsonData[key];
          console.log(topic);
        }
        
       }
    }catch(error){
        console.error('something went wrong', error);
    }   
}

selectTopic('Video Games');

