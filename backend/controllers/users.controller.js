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
    updateUser: async (req, res) => {
        console.log(`[INFO]: Reached PATCH user controller`);
        const userToBeModified = req.body;
        if (!userToBeModified ||
            !userToBeModified.id ||
            !userToBeModified?.firstName ||
            !userToBeModified?.lastName ||
            !userToBeModified?.userName) {
            res.status(400).send(`[ERROR]: Invalid user object`);
            return;
        }
        console.log (`[INFO]: Update user`);
        usersService.updateUser(userToBeModified);
        res.status(201).send(`[INFO]: User modified successfully`);
    },
    deleteUser: async (req, res) => {
        console.log('[INFO]: Reached user controller');
        console.log (`[INFO]: Delete user: ${req.body}`);
        usersService.deleteUser(req.body);
        res.status(204).send(`[INFO]: User deleted succesfully`);
    }
};

module.exports = usersController;