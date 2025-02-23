import mongoose from 'mongoose';

mongoose.connect('mongodb://localhost:27017/EnglishDB').then(()=>{ console.log("connection successful")});

export default mongoose;