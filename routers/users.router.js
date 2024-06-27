const express = require('express');
const usersController = require ('../controllers/users.controller');
const router = express.Router();

router.post('/', (req, res) => {
    res.status(404).send(`
        <html>
            <head>
                <title>404</title>
            </head>
            <body>
                <h1>404 - Not Found</h1>
            </body>
        </html>
    `);
});

router.get('/', (req, res) => {
    res.status(404).send(`
        <html>
            <head>
                <title>404</title>
            </head>
            <body>
                <h1>404 - Not Found</h1>
            </body>
        </html>
    `);
});

router.post('/:id', (req, res) => {
    const requestedUID = req.params.id;
    console.log (`[INFO]: User id: ${requestedUID}`);
    if (requestedUID !== undefined) {
	    usersController.createUser(requestedUID);
	    res.status(201).send(`
	        <html>
	            <head>
	                <title>User created</title>
	            </head>
	            <body>
	                <h1>User <em>${req.body.firstName} ${req.body.lastName}</em> has been created!</h1>
	            </body>
	        </html>
        `);
    } else {
        res.status(400).send();
        console.log (`[ERROR]: could not create user with ${requestedUID}: invalid JSON`);
        return;
    }
});

router.delete('/:id', (req, res) => {
    const requestedUID = req.params.id;
    usersController.deleteUser(requestedUID);
    if (requestedUID !== undefined) {
	    res.status(204).send(`
	        <html>
	            <head>
	                <title>User deleted</title>
	            </head>
	            <body>
	                <h1>User <em>${req.body.firstName} ${req.body.lastName}</em> has been deleted!</h1>
	            </body>
	        </html>
	    `);
    } else {
        res.status(400).send();
        console.log (`[ERROR]: could not delete user with id ${requestedUID}: invalid JSON`);
        return;
    }
});

module.exports = router;