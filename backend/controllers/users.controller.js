const usersService = require('../services/users.service');

const usersController = {
    getUser: async (req, res) => {
        console.log (`[INFO]: Reached GET user controller`);
        const username = req.params.username;
        console.log(req);
        console.log (`[INFO]: User: ${username}`);
        const userObj = await usersService.getUserByUsername(username);
        if (!userObj) {
            res.status (404).send(`User ${username} not found`);
            return;
        }
        res.status(200).send(userObj);
    },
    createUser: async (req, res) => {
        console.log('[INFO]: Reached user creation controller');
        const userToBeCreated = req.body;
        console.log(`[INFO]: User to be created: ${username}`)
        if (!userToBeCreated ||
            !userToBeCreated.id ||
            !userToBeCreated?.firstName ||
            !userToBeCreated?.lastName ||
            !userToBeCreated?.userName) {
            res.status(400).send(`[ERROR]: Invalid user object`);
            return;
        }
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
        usersService.updateUser(userToBeModified);
        res.status(201).send(`[INFO]: User modified successfully`);
    },
    deleteUser: async (req, res) => {
        const user = req.params.id;
        console.log (`[INFO]: Deleted user with id ${user}`);
        const response = await usersService.deleteUser(user);
        console.log(response);
        res.send(response);
    }
};

module.exports = usersController;