const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/notes-app', );
        console.log('Connected to MongoDB');
    } catch (err) {
        console.error(err);
    }
};

module.exports = connectDB;
