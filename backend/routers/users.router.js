const express = require('express');
const usersController = require ('../controllers/users.controller');
const router = express.Router();

router.post('/', usersController.createUser);
router.get('/:username', usersController.getUser);
router.patch('/:id', usersController.updateUser);
router.delete('/:id', usersController.deleteUser);

module.exports = router;