const express = require('express');
const server = express();
const moviesRouter = require('../routes/movie-routes');



// parsing json
server.use(express.json());

// testing server
server.get('/', (req, res) => {
    res.send({ message: "Ovo uredno radi."});
});


// setting movie router
server.use('/api/v1/movies', moviesRouter);



module.exports = server;