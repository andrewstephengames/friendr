const mongoose = require ('mongoose');
const UserModel = require('../data/users.model');
const PostModel = mongoose.model ('Post',
    {
        date: Date,
        postId: Number,
        userId: Number,
        title: String,
        description: String
    });

module.exports = PostModel;