const mongoose = require ('mongoose');
const UserModel = require('../data/users.model');
const PostModel = mongoose.model ('Post',
    {
        id: Number,
        description: String,
        author: {
            id: Number,
            firstName: String,
            lastName: String,
            username: String,
            birthYear: Number
        }
    });

module.exports = PostModel;