const PostModel = require ('../data/posts.model');
const postsService = {
    getPostById: async (postId) => {
	    console.log(`[INFO]: Reached GET post service`);
	    try {
	        const postObj = await PostModel.findOne({ id: postId }, {});
	        return postObj;
	    } catch (error) {
	        console.error(`[ERROR]: Error fetching post ${postId}`, error);
	        throw error;
        }
    },
    createPost: (postObj) => {
        console.log (`[INFO]: Reached post creation service`);
	    const postToBeCreated = new PostModel (postObj);
	    postToBeCreated.save().then(() => {
	        console.log (`[INFO]: Post added to DB succesfully`);
	    });
        console.log (`[INFO]: Created post in post service`);
    },
    updatePost: (newPostObj) => {
        console.log (`[INFO]: Reached PATCH post service`);
        PostModel.deleteOne({id: newPostObj.id});
        PostModel.updateOne(newPostObj).then(() => {
            console.log (`[INFO] Post updated in the DB succesfully`);
        });
        console.log (`[INFO]: Updated post in post service`);
    },
    deletePost: async (postId) => {
        return await PostModel.deleteOne({ id: postId });
    }
};

module.exports = postsService;