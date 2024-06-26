const express = require('express');
const usersController = require ('../controllers/users.controller.js');
const router = express.Router();

router.post('/', (req, res) => {
    usersController.createUser(req.body);
    console.log(req.body);
    res.status(201);
    res.send('Succesfully created!');
});

router.get('/', (req, res) => {
    const requestedUID = req.query.id;
    res.status(404).send();
});

router.delete('/:id', (req, res) => {
    const requestedUID = req.params.id;
    res.status(204).send();
});

module.exports = router;