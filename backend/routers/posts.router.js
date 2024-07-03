const express = require('express');
const postsController = require ('../controllers/posts.controller');
const router = express.Router();

router.post('/', postsController.createPost);
router.get('/:id', postsController.getOne);
router.get('/', postsController.getAll);
router.patch('/:id', postsController.updatePost);
router.patch('/:id/likes', postsController.updatePostLikes);
router.delete('/:id', postsController.deletePost);

module.exports = router;