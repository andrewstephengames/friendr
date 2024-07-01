const mongoose = require ('mongoose');
const PostModel = mongoose.model ('Post',
    {
        id: Number,
        date: Date,
        userId: Number,
        title: String,
        description: String
    });

module.exports = PostModel;