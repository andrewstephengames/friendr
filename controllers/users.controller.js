const usersService = require('../services/users.service');

const usersController = {
    createUser: (userObj) => {
        console.log('[INFO]: Reached user controller');
        usersService.createUser(userObj);
    },
    deleteUser: (userObj) => {
        console.log('[INFO]: Reached user controller');
        usersService.deleteUser(userObj);
    }
};

module.exports = usersController;