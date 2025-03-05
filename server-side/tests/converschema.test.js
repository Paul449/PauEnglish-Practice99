//import Mongoose model to mock functionality
const { connection, default: mongoose } = require('mongoose');
const {Conversation} = require('../models/converschema.js');
const {MongoClient} = require('mongodb');
//test database suite 
describe('testing EnglishDB',()=>{
    //define variable to connect with database
    let Connection;
    //define database variable
    let EnglishDB;
    //connect to database tobefore running all test cases
    beforeAll(async ()=>{
        Connection = await MongoClient.connect(globalThis._MONGO_URI__,{
            useNewURLParser: true,
            useUnifiedTopology:true,
        });
        EnglishDB = await Connection.db(globalThis._MONGO_DB_NAME__);
    })
    //closes database once all tests ran
    afterAll(async()=>{
        await mongoose.connection.close();
    })
    it('insert document into the collection',async()=>{
        const Topic = EnglishDB[Conversation].collection('Music');
    })
});