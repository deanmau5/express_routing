const express = require('express');
const routes = express.Router();

const genres = [
    {id: 1, genre: 'horror'}, 
    {id: 2, genre: 'romance'},
    {id: 3, genre: 'action'}
];

routes.get('/', (req, res) => {
    res.status(200).send('Home page called');
});

routes.get('/api/genres', (req, res) => {
    res.status(200).send(genres);
});

routes.post('/api/genres', (req, res) => {
    const newGenre = req.body.genre;
    const genre = {
        id: genres.length+1,
        genre: newGenre
    };
    genres.push(genre);
    res.send(genre);
});


module.exports = routes;