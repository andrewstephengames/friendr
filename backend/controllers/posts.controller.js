const postsService = require('../services/posts.service');

const postsController = {
    getPost: async (req, res) => {
        console.log('[INFO]: Reached GET post controller');
        const postId = req.params.id;
        console.log (`[INFO]: Post: ${postId}`);
        const postObj = await postsService.getPostById(postId);
        console.log (`[INFO]: ${JSON.stringify(postObj)}`);
        if (!postObj) {
            res.status (404).send(`Post with ID ${postId} not found`);
        } else {
            console.log (`[INFO]: ${postObj}`);
            res.status(200).send(postObj);
        }
    },
    createPost: async (req, res) => {
        console.log('[INFO]: Reached post creation controller');
        const postToBeCreated = req.body;
        if (!postToBeCreated ||
            !postToBeCreated?.id ||
            !postToBeCreated?.userId ||
            !postToBeCreated?.title ||
            !postToBeCreated?.description) {
            res.status(400).send(`[ERROR]: Invalid post object`);
            return;
        }
        console.log (`[INFO]: Create post ${postToBeCreated.id}`);
        postsService.createPost(postToBeCreated);
        res.status(201).send(`[INFO]: Post created successfully`);
    },
    updatePost: async (req, res) => {
        console.log(`[INFO]: Reached PATCH post controller`);
        const postToBeModified = req.body;
        if (!postToBeModified ||
            !postToBeModified?.id ||
            !postToBeModified?.userId ||
            !postToBeModified?.title ||
            !postToBeModified?.description) {
            res.status(400).send(`[ERROR]: Invalid post object`);
            return;
        }
        console.log (`[INFO]: Update post`);
        postsService.updatePost(postToBeModified);
        res.status(201).send(`[INFO]: Post updated successfully`);
    },
    deletePost: async (req, res) => {
        console.log('[INFO]: Reached post controller');
        console.log (`[INFO]: Delete post: ${req.body}`);
        postsService.deletePost(req.body);
        res.status(204).send(`[INFO]: Post deleted succesfully`);
    }
};

module.exports = postsController;