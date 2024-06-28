const PostModel = require ('../data/posts.model');
const postsService = {
    getPostById: async (postId) => {
        return await PostModel.findOne ({ id: postId }, {});
    },
    createPost: (postObj) => {
        console.log (`[INFO]: Reached post service`);
	    const postToBeCreated = new PostModel (postObj);
	    postToBeCreated.save().then(() => {
	        console.log (`[INFO]: Post added to DB succesfully`);
	    });
        console.log (`[INFO]: Created post in post service`);
    },
    deletePost: async (postId) => {
        await PostModel.remove ({ id: postId }).then(() => {
            console.log(`[INFO]: Post with id ${userId} has been removed`);
        }).throw((err) => {
            console.log (`[ERROR]: Could not remove post: ${err}`);
        });
    }
};

module.exports = postsService;