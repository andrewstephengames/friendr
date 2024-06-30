const express = require('express');
const postsController = require ('../controllers/posts.controller');
const router = express.Router();

router.post('/:id', postsController.createPost);
router.get('/:id', postsController.getPost);
router.patch('/:id', postsController.updatePost);
router.delete('/:id', postsController.deletePost);

module.exports = router;