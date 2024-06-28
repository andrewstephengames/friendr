const UserModel = require('../data/users.model');
const usersService = {
    getUserById: async (userId) => {
        console.log (`[INFO]: Reached GET user service`);
        return await UserModel.findOne ({ id: userId }, {});
    },
    createUser: (userObj) => {
        console.log (`[INFO]: Reached POST user service`);
	    const usertoBeCreated = new UserModel (userObj);
	    usertoBeCreated.save().then(() => {
	        console.log (`[INFO]: User added to DB succesfully`);
	    });
        console.log (`[INFO]: Created user in user service`);
    },
    updateUser: (newUserObj) => {
        console.log (`[INFO]: Reached PATCH user service`);
        const userToBeModified = new UserModel (newUserObj);
        userToBeModified.save().then(() => {
            console.log (`[INFO] User updated in the DB succesfully`);
        });
        console.log (`[INFO]: Updated user in user service`);
    },
    deleteUser: async (userId) => {
        await UserModel.remove ({ id: userId }).then(() => {
            console.log(`[INFO]: User with id ${userId} has been removed`);
        }).throw((err) => {
            console.log (`[ERROR]: Could not remove user: ${err}`);
        });
    }
};

module.exports = usersService;