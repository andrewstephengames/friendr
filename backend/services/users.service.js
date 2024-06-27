const UserModel = require('../data/users.model');
const usersService = {
    getUserById: async (userId) => {
        const response =  await UserModel.findOne ({ id: userId }, {});
        return response;
    },
    createUser: (userObj) => {
        console.log (`[INFO]: Reached user service`);
	    const usertoBeCreated = new UserModel (userObj);
	    usertoBeCreated.save().then(() => {
	        console.log (`[INFO]: User added to DB succesfully`);
	    });
        console.log (`[INFO]: Created user in user service`);
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