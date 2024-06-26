const postsService = require('../services/posts.service');

const postsController = {
    createPost: (postId) => {
        console.log('[INFO]: Reached post controller');
        postsService.createPost(postId);
    },
    deletePost: (postId) => {
        console.log('[INFO]: Reached post controller');
        postsService.deletePost(postId);
    }
};

module.exports = postsController;