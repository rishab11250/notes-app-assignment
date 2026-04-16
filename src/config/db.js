const mongoose = require('mongoose');

const connectDB = async () => {
    const uri = process.env.MONGODB_URI;
    const localUri = 'mongodb://localhost:27017/notes-app';

    try {
        if (uri) {
            await mongoose.connect(uri);
            console.log('Connected to MongoDB Atlas');
        } else {
            await mongoose.connect(localUri);
            console.log('Connected to local MongoDB');
        }
    } catch (err) {
        console.error('Atlas connection failed, trying local MongoDB...');
        try {
            await mongoose.connect(localUri);
            console.log('Connected to local MongoDB');
        } catch (localErr) {
            console.error('Local MongoDB also failed:', localErr.message);
        }
    }
};

module.exports = connectDB;
