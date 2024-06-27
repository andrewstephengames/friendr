const express = require('express');
const postsController = require ('../controllers/posts.controller');
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
    const requestedPID = req.query.id;
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
    const requestedPID = req.params.id;
    if (requestedPID !== undefined) {
        console.log (`[INFO]: Post with id ${requestedPID} created succesfully`);
        postsController.createPost(requestedPID);
		res.status(201).send(`
			<html>
			    <head>
			        <title>Post creation</title>
			    </head>
			    <body>
			        <h1>Post with ${requestedPID} created succesfully</h1>
			    </body>
			</html>
		`);
    } else {
        console.log (`[ERROR]: Unable to create post with ${requestedPID}: invalid JSON`)
        res.status(400).send();
        return;
    }
});

router.delete('/:id', (req, res) => {
    const requestedPID = req.params.id;
    if (requestedPID !== undefined) {
        postsController.deletePost(requestedPID);
		res.status(204).send(`
			<html>
			    <head>
			        <title>Post deletion</title>
			    </head>
			    <body>
			        <h1>Post with ${requestedPID} has been deleted</h1>
			    </body>
			</html>
		`);
    } else {
        res.status(400).send();
        console.log (`[ERROR]: Unable to delete post with id ${requestedPID}: invalid JSON`)
    }
});

module.exports = router;