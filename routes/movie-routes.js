const express = require('express');
const Movies = require('../models/movie-queries');

// defining router
const router = express.Router();


// GET all 

router.get('/', (req, res) => {
    Movies.find()
    .then(data => {
        res.status(200).json(data)
    })
    .catch(error => {
        console.error(error)
        res.status(500).json({ message: 'Greska: ' + error})
    })
});


// GET by id 

router.get('/:id', (req, res) => {
    const { id } = req.params;

    if (typeof id != 'undefined') {
        Movies.findById(req.params.id)
        .then(data => {
            if (data) {
                res.status(200).json(data)
            } else {
                res.status(404).json({ message: "Record not found."})
            }
        })
    } else {
        console.error(error)
        res.status(500).json({ message: 'Greska: ' + error})
    }
});


function validMovie(movie) {
    return typeof movie.id == 'string' && movie.name.trim() != '';

}

// POST

router.post('/', (req, res) => {
    console.info(req.body)

    if (validMovie(req.body)) {
        // insert
        Movies.add(req.body)
        .then(data => {
            res.status(200).json(data)
    })
    } else {
        // respond with an error
        console.error(error)
        res.status(500).json({ message: 'Greska: ' + error})
    }


});


// UPDATE by id

router.put('/:id', (req, res) => {
    console.info(req.body)
    console.info(req.params)

    const { id } = req.params;
    const changes = req.body;

    Movies.update(id, changes) 
    .then(data => {
        if (data) {
            res.status(200).json(data)
        } else {
            res.status(404).json({ message: "Record not found."})
        }
    })
    .catch(error => {
        console.error(error)
        res.status(500).json({ message: 'Greska: ' + error})
    })
});


// DELETE by id

router.delete('/:id', (req, res) => {
    const { id } = req.params;

    Movies.remove(id)
    .then(count => {
        if (count > 0) {
            res.status(200).json({ message: "Movie successfully deleted." })
        } else {
            res.status(404).json({ message: "Unable to locate record." })
        }
    })
    .catch(error => {
        console.error(error)
        res.status(500).json({ message: 'Greska: ' + error})
    })
});



module.exports = router;