const mongoose = require ('mongoose');
const PostModel = mongoose.model ('Post',
    {
        id: String,
        date: Date,
        author: String,
        title: String,
        description: String,
        likes: [String]
    });

module.exports = PostModel;