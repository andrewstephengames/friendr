const usersService = {
    createUser: (userObj) => {
        console.log ("Reached user service");
        console.log (userObj);
    },
    deleteUser: (id) => {
        console.log ('Deleted user: ' + userObj);
    }
};

module.exports = usersService;