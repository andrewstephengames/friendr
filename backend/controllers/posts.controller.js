const postsService = require('../services/posts.service');

const postsController = {
    createPost: (postObj) => {
        console.log('[INFO]: Reached post controller');
        postsService.createPost(postObj);
    },
    deletePost: (postObj) => {
        console.log('[INFO]: Reached post controller');
        postsService.deletePost(postObj);
    }
};

module.exports = postsController;