require('dotenv').config();
//import Mongoose model to mock functionality
const { connection, default: mongoose } = require('mongoose');
const {MongoMemoryServer} = require('mongodb-memory-server');
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
        Connection = await MongoClient.connect(process.env.MONGO_URI,{
            useNewUrlParser: true,
            useUnifiedTopology:true,
        });
        EnglishDB = await Connection.db(globalThis.MONGO_DB_NAME);
    })
    //closes database once all tests ran
    afterAll(async()=>{
        await mongoose.connection.close();
    })
    it('insert document into the collection',async()=>{
        const Title = EnglishDB.collection('conversation');
        //testing title
        const documentConver = {
            _id:'ID topic',
            title:'Music',
        }
    await Title.insertOne(documentConver);
    const InsertTopic = await Title.findOne({_id:'ID topic'});
    expect(InsertTopic).toEqual(documentConver);
    })
});