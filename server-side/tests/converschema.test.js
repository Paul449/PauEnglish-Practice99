//import Mongoose model to mock functionality
import Conversation from '../models/converschema.js';
const {MongoClient} = require('mongodb');
//test string
test('topic name',()=>{
    const Conver = Conversation({title:'Music'});// selecting title document from conver schema
    expect(Conver.title).toBe('Music');
})
    