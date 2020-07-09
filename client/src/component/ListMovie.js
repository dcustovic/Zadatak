import React from 'react';
import { Link } from 'react-router-dom';

const ListMovie = ({ name, genre, rating, explicit, id }) => {
    return(
  
            <Link to={`/movie/${id}`} className="list-group-item mb-2">
            <b>Name:</b> {name}
            <br></br>
            <b>Genre:</b> {genre}
            <br></br>
            <b>Rating:</b> {rating}
            <br></br>
            <b>Explicit:</b> {explicit}
            </Link>
          

    )
}


export default ListMovie;