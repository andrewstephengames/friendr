const UserModel = require('../data/users.model');
const usersService = {
    createUser: (userObj) => {
        if (userObj.firstName !== undefined && userObj.lastName !== undefined) {
            console.log (`[INFO]: Created ${userObj.firstName} ${userObj.lastName} in user service`);
        } else {
            console.log(`[ERROR]: Could not create user with id ${userObj}: unrecognized JSON`);
        }
        const usertoBeCreated = new UserModel (userObj);
        usertoBeCreated.save().then(() => {
            console.log (`[INFO]: User added to DB succesfully`);
        });
    },
    deleteUser: (userId) => {
        if (userId.firstName !== undefined && userId.lastName !== undefined) {
            console.log (`[INFO]: Deleted ${userId.firstName} ${userId.lastName} in user service`);
        } else {
            console.log(`[ERROR]: Could not delete user with id ${userID}: unknown entry`);
        }
    }
};

module.exports = usersService;