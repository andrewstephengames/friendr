const postsService = {
    createPost: (postObj) => {
        console.log (`[INFO]: Post with id ${postObj} uploaded succesfully`);
    },
    deletePost: (postObj) => {
        console.log (`[INFO]: Post with id ${postObj} removed succesfully`);
    }
};

module.exports = postsService;