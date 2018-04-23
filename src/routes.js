const express = require('express');
const routes = express.Router();

routes.get('/', (req, res) => {
    res.status(200).send('Home page called');
});

routes.get('/flights/:from', (req, res) => {
    console.log(req.params);
    res.status(200).send('requested flights to ' + req.params.from);
});

module.exports = routes;