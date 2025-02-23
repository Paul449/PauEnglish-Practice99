//import Mongoose model to mock functionality
const Conversation = require('../models/converschema');
//test string
test('topic name',()=>{
    expect(title('Music')).toBe('Music');
})