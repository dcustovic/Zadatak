import React, { Component } from 'react';


function ListMovies({ children }) {
 
    return(
        <ul className="list-group">
            {children}
        </ul>
    )
};

export default ListMovies;