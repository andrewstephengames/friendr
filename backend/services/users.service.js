const UserModel = require('../data/users.model');
const usersService = {
    getUserById: async (userId) => {
	    console.log(`[INFO]: Reached GET user service`);
	    try {
	        const userObj = await UserModel.findOne({ id: userId }, {});
	        console.log(`[INFO]: Found user ${userId}`);
	        return userObj;
	    } catch (error) {
	        console.error(`[ERROR]: Error fetching user ${userId}`, error);
	        throw error;
        }
    },
    createUser: (userObj) => {
        console.log (`[INFO]: Reached user creation service`);
	    const userToBeCreated = new UserModel (userObj);
	    userToBeCreated.save().then(() => {
	        console.log (`[INFO]: User added to DB succesfully`);
	    });
        console.log (`[INFO]: Created user in user service`);
    },
    updateUser: (newUserObj) => {
        console.log (`[INFO]: Reached PATCH user service`);
        UserModel.deleteOne({id: newUserObj.id});
        UserModel.updateOne(newUserObj).then(() => {
            console.log (`[INFO] User updated in the DB succesfully`);
        });
        console.log (`[INFO]: Updated user in user service`);
    },
    deleteUser: async (userObj) => {
        await UserModel.deleteOne ({ id: userObj.id }).then(() => {
            console.log(`[INFO]: User with id ${userObj.id} has been removed`);
        }).catch((err) => {
            console.log (`[ERROR]: Could not remove user: ${err}`);
        });
    }
};

module.exports = usersService;