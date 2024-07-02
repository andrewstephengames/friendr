const UserModel = require('../data/users.model');
const { v4: uuidv4 } = require ('uuid');

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
    getUserByUsername: async (username) => {
	    console.log(`[INFO]: Reached GET user service`);
	    try {
	        const userObj = await UserModel.findOne({ userName: username }, { firstName: 1, lastName: 1, _id: 0 });
	        console.log(`[INFO]: Found user ${username}`);
	        return userObj;
	    } catch (error) {
	        console.error(`[ERROR]: Error fetching user ${username}`, error);
	        throw error;
        }
    },
    createUser: (userObj) => {
        console.log (`[INFO]: Reached user creation service`);
        userObj.id = uuidv4();
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
    deleteUser: async (userId) => {
        return await UserModel.deleteOne ({ id: userId });
    }
};

module.exports = usersService;