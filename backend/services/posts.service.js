const PostModel = require ('../data/posts.model');
const { v4: uuidv4 } = require('uuid');

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
    getAllPosts: async () => {
        const postObj = await PostModel.find();
        return postObj;
    },
    createPost: (postObj) => {
        console.log (`[INFO]: Reached post creation service`);
        postObj.id = uuidv4();
        console.log(`[DEBUG]: ${postObj.id}`);
        postObj.date = new Date();
	    const postToBeCreated = new PostModel (postObj);
        console.log (`[DEBUG]: ${postToBeCreated}`);
	    postToBeCreated.save().then(() => {
	        console.log (`[INFO]: Post added to DB succesfully`);
	    });
        console.log (`[INFO]: Created post in post service`);
    },
    updatePost: (newPostObj) => {
        console.log (`[INFO]: Reached PATCH post service`);
        PostModel.deleteOne({id: newPostObj.id});
        PostModel.updateOne(newPostObj).then(() => {
            console.log (`[INFO]: Post updated in the DB succesfully`);
        });
        console.log (`[INFO]: Updated post in post service`);
    },
    removePostLikes: async (postId, username) => {
        await PostModel.updateOne({id: postId}, {$pull: {likes: username}})
    },
    addPostLikes: async (postId, username) => {
        await PostModel.updateOne({id: postId}, {$push: {likes: username}})
    }
};

module.exports = postsService;