const express = require('express');
const routes = require('./routes');
const app = express();

app.use('/', routes, (req, res) => {
    res.send(404);
})

app.listen(3000, () => {
    console.log('app is now listening on port 3000');
});