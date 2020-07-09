import React from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom';

const SingleMovieList = ({ name, genre, rating, explicit, onEdit, id, history }) => {
    return (
        <div className={"card"}>
            <div className="card-block my-3 mx-3">
                <b>Name:</b> {name}
                <br></br>
                <b>Genre:</b> {genre}
                <br></br>
                <b>Rating:</b> {rating}
                <br></br>
                <b>Explicit:</b> {explicit}
                <button className="btn btn-danger btn-sm float-right" type="submit" onClick={() => {
                    axios.delete(`/api/v1/movies/${id}`).then(() => {
                        history.push('/');
                    })
                }}>Delete</button>
                <button className="btn btn-info btn-sm mr-1 float-right" type="submit" onClick={onEdit}>Edit</button>
            </div>
            
        </div>
    )
}

export default withRouter(SingleMovieList);