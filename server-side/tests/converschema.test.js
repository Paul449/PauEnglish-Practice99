require('dotenv').config();
//import Mongoose model to mock functionality
const { connection, default: mongoose } = require('mongoose');
const {MongoMemoryServer} = require('mongodb-memory-server');
const {Conversation} = require('../models/converschema.js');
const {MongoClient, ObjectId} = require('mongodb');
//test database suite 
describe('testing EnglishDB',()=>{
    //define variable to connect with database
    let Connection;
    //define database variable
    let EnglishDB;
    let mongoServer;
    //connect to database before running all test cases
    beforeAll(async ()=>{
        mongoServer = await MongoMemoryServer.create();
        const mongoUri = mongoServer.getUri();
        Connection = await MongoClient.connect(process.env.MONGO_URI,{
            useNewUrlParser: true,
            useUnifiedTopology:true,
        });
        EnglishDB = Connection.db();
    })
    //closes database once all tests ran
    afterAll(async()=>{
        await mongoose.connection.close();
        await mongoServer.stop();
    })
    it('insert document into the collection',async()=>{
        const Title = EnglishDB.collection('conversation');
        //testing title
        const documentConver = {
            _id:new ObjectId(),
            title:'Music',
        }
    await Title.insertOne(documentConver);
    const InsertTopic = await Title.findOne({_id:documentConver._id});
    expect(InsertTopic).toEqual(documentConver);
    })
});