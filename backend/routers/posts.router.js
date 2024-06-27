const express = require('express');
const postsController = require ('../controllers/posts.controller');
const router = express.Router();

router.post('/', postsController.createPost);
router.delete('/', postsController.deletePost);
//router.get('/', usersController.getUser());

module.exports = router;