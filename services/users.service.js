const usersService = {
    createUser: (userId) => {
        if (userId.firstName !== undefined && userId.lastName !== undefined) {
            console.log (`[INFO]: Created ${userId.firstName} ${userId.lastName} in user service`);
        } else {
            console.log(`[ERROR]: Could not create user with id ${userId}: unrecognized JSON`);
        }
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