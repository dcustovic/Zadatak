import React from 'react';

function ListMovie({ name, genre, rating, explicit }) {
    return(
        <li className="list-group-item">
           <b>Name:</b> {name}
           <br></br>
           <b>Genre:</b> {genre}
           <br></br>
           <b>Rating:</b> {rating}
           <br></br>
           <b>Explicit:</b> {explicit}
        </li>
    )
}


export default ListMovie;