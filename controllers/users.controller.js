const usersService = require('../services/users.service');

const usersController = {
    createUser: (userId) => {
        console.log('[INFO]: Reached user controller');
        usersService.createUser(userId);
    },
    deleteUser: (userId) => {
        console.log('[INFO]: Reached user controller');
        usersService.deleteUser(userId);
    }
};

module.exports = usersController;