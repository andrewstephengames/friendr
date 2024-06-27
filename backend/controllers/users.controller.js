const usersService = require('../services/users.service');

const usersController = {
    getUser: async (req, res) => {
        console.log (`[INFO]: Reached GET user controller`);
        const userId = req.params.id;
        console.log (`[INFO]: User: ${userId}`);
        const userObj = await usersService.getUserById(userId);
        res.status(200).send(userObj);
    },
    createUser: async (req, res) => {
        console.log('[INFO]: Reached user controller');
        const userToBeCreated = req.body;
        if (!userToBeCreated ||
            !userToBeCreated.id ||
            !userToBeCreated?.firstName ||
            !userToBeCreated?.lastName ||
            !userToBeCreated?.userName) {
            res.status(400).send(`[ERROR]: Invalid user object`);
            return;
        }
        console.log (`[INFO]: Create user: ${userToBeCreated.firstName} ${userToBeCreated.lastName}`);
        usersService.createUser(userToBeCreated);
        res.status(201).send(`[INFO]: User created successfully`);
    },
    deleteUser: async (userObj) => {
        console.log('[INFO]: Reached user controller');
        console.log (`[INFO]: Delete user: ${userObj}`);
        usersService.deleteUser(userObj);
    }
};

module.exports = usersController;