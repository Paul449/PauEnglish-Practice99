//import Mongoose model to mock functionality
import Conversation from '../models/converschema.js';
//const {MongoClient} = require('mongodb');
//test database suite 
 describe('EnglishDB test',()=>{
    let connection; // variable to connect with EnglishDB database
    let EnglishDB; 
    //initialize database test using beforeAll Hook
    /*
    beforeAll('initialize EnglishDB database', ()=>{
        EnglishDB = initializeDB();
    });
    
    AfterAll(()=>{
        EnglishDB.close();
    })
       */ 
    test('Selected topic',()=>{
        let topic = Conversation.title.insertOne({title:'Music'});
        expect(topic).toBe('Music');
    })
 })