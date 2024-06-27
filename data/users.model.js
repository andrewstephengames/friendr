const mongoose = require ('mongoose');
const UserModel = mongoose.model ('User',
    {
        id: String,
        firstName: String,
        lastName: String,
        username: String,
        birthYear: String
    });

// create a mongoose model for User entity

module.exports = UserModel;