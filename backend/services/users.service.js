const UserModel = require('../data/users.model');
const { v4: uuidv4 } = require ('uuid');

const usersService = {
    getUserById: async (userId) => {
        const response = await UserModel.findOne( {id: userId}, {firstName: 1, lastName: 1, _id: 0});
        return response;
    },
    getUserByUsername: async (username) => {
        // const response = await UserModel.findOne( {userName: username}, {firstName: 1, lastName: 1, _id: 0});
        const response = await UserModel.find();
        console.log(`Response: ${response}`);
        return response;
    },
    createUser: (userObj) => {
        console.log (`[INFO]: Reached user creation service`);
        userObj.id = uuidv4();
        console.log(`[INFO]: Creating user ${userObj}`);
	    const userToBeCreated = new UserModel (userObj);
	    userToBeCreated.save().then(() => {
	        console.log (`[INFO]: User added to database succesfully`);
	    });
    },
    updateUser: (newUserObj) => {
        console.log (`[INFO]: Reached PATCH user service`);
        UserModel.deleteOne({id: newUserObj.id});
        UserModel.updateOne(newUserObj).then(() => {
            console.log (`[INFO] User updated in the database succesfully`);
        });
    },
    deleteUser: async (userId) => {
        console.log (`[INFO]: Deleted user with id ${userId} in service`)
        const response = await UserModel.deleteOne ({ id: userId });
        return response;
    }
};

module.exports = usersService;