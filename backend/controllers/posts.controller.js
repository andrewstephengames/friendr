const postsService = require('../services/posts.service');

const postsController = {
    getPost: async (req, res) => {
        console.log('[INFO]: Reached GET post controller');
        const postId = req.params.id;
        console.log (`[INFO]: Post: ${postId}`);
        const postObj = await postsService.getPostById(postId);
        res.status(200).send();
    },
    createPost: async (req, res) => {
        console.log('[INFO]: Reached post controller');
        const postToBeCreated = req.body;
        if (!postToBeCreated ||
            !postToBeCreated.id ||
            !postToBeCreated?.description ||
            !postToBeCreated?.author) {
            res.status(400).send(`[ERROR]: Invalid post object`);
            return;
        }
        console.log (`[INFO]: Create post with ${postToBeCreated.id}`);
        postsService.createPost(postToBeCreated);
        res.status(201).send(`[INFO]: Post created successfully`);
    },
    deletePost: async (req, res) => {
        console.log('[INFO]: Reached post controller');
        console.log (`[INFO]: Delete post: ${req.body}`);
        postsService.deletePost(req.body);
        res.status(204).send(`[INFO]: Post deleted succesfully`);
    }
};

module.exports = postsController;