usersService = require('../services/users.service');

const usersController = {
    createUser: (userObj) => {
        console.log('Reached user controller');
        console.log (userObj);
        usersService.createUser(userObj);
    },
    deleteUser: (userObj) => {
        console.log ('Deleted user: ' + userObj);
        usersService.deleteUser(userObj);
    }
};

module.exports = usersController;