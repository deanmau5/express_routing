const express = require('express');
const routes = require('./routes');
const app = express();

app.use(express.json());

app.use('/', routes, (req, res) => {
    // This handles any endpoints not defined in routes
    res.send(404);
})

app.listen(3000, () => {
    console.log('app is now listening on port 3000');
});