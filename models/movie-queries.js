const knex = require('knex');
const config = require('../knexfile');
const db = knex(config.development);


// CREATE
async function add(movie) {
    const [id] = await db('movies').insert(movie);
    return ({ message: `${movie.name} with an ID(${id}) has been added.`});
};


// READ
function find() {
    return db('movies');
};


// READ by id
function findById(id) {
    return db('movies').where({ id: id }).first();
}


// UPDATE by id
function update(id, change) {
    return (
        db('movies')
        .where({ id: id })
        .update(change, [id])
        .then(() => {
            return findById(id);
        })
    )
}


// DELETE by id
function remove(id) {
    return db('movies').where({ id: id }).del();
}


module.exports = {
    add,
    find,
    findById,
    remove,
    update
};