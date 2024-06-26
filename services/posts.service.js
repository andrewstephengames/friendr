const postsService = {
    createPost: (postId) => {
        console.log (`[INFO]: Post with id ${postId} uploaded succesfully`);
    },
    deletePost: (postId) => {
        console.log (`[INFO]: Post with id ${postId} removed succesfully`);
    }
};

module.exports = postsService;