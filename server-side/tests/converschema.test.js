//import Mongoose model to mock functionality
const { connection } = require('mongoose');
import Conversation from '../models/converschema.js';
const {MongoClient} = require('mongodb');
//test database suite 
describe('testing EnglishDB',()=>{
    //define variable to connect with database
    let Connection;
    //define database variable
    let EnglishDB;
    //Initialize database to run all test cases from it
    beforeAll(async ()=>{
        Connection = await MongoClient.connect(globalThis._MONGO_URI__,{
            useNewURLParser: true,
            useUnifiedTopology:true,
        });
        EnglishDB = await connection.db(globalThis._MONGO_DB_NAME__);
    })
    AfterAll(async()=>{
        await Connection.close();
    })
    it('insert document into the collection',async()=>{
        const Topic = EnglishDB.collection('Music');
    })
});