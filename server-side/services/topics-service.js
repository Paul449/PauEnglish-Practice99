//import file system library
import fs from 'fs';
//http
//request topic
export default async function selectTopic(topic){
    try{
       let data = await fs.readFileSync('../data/topics.json','utf-8');
       let jsonData = JSON.parse(data);
       for(let key in jsonData){
        if(key === topic){
          console.log(jsonData[key]);
          return jsonData[key];
        }
       }
       console.log('topic found:', topic)
    }catch(error){
        console.error('something went wrong', error);
    }   
}
// call function
selectTopic('Music');
//export function to conversation controller

