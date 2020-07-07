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
        res.status(500).json({ message: "Unable to retrieve movies."})
    })
});


// GET by id 

router.get('/:id', (req, res) => {
    const { id } = req.params;
    
    Movies.findById(req.params.id)
    .then(data => {
        if (data) {
            res.status(200).json(data)
        } else {
            res.status(404).json({ message: "Record not found."})
        }
    })
    .catch(error => {
        res.status(500).json({ message: "Unable to perform the operation."})
    })
});


// POST

router.post('/', (req, res) => {
    Movies.add(req.body)
    .then(data => {
        res.status(200).json(data)
    })
    .catch(error => {
        res.status(500).json({ message: "Cannot add movie." })
    })
});


// UPDATE by id

router.put('/:id', (req, res) => {
    const { id } = req.params;
    const changes = req.body

    Movies.update(id, changes) 
    .then(data => {
        if (data) {
            res.status(200).json(data)
        } else {
            res.status(404).json({ message: "Record not found."})
        }
    })
    .catch(error => {
        res.status(500).json({ message: "Error updating record."})
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
        res.status(500).json({ message: "Unable to delete record." })
    })
});



module.exports = router;