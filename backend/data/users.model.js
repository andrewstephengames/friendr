const mongoose = require ('mongoose');
const UserModel = mongoose.model ('User',
    {
        id: Number,
        firstName: String,
        lastName: String,
        username: String,
        birthYear: Number
    });

// create a mongoose model for User entity

module.exports = UserModel;