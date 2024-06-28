const express = require('express');
const usersController = require ('../controllers/users.controller');
const router = express.Router();

router.post('/:id', usersController.createUser);
router.get('/:id', usersController.getUser);
router.patch('/:id', usersController.updateUser);
router.delete('/:id', usersController.deleteUser);

module.exports = router;