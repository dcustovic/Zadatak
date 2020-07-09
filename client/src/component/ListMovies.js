import React from 'react';


const ListMovies = ({ children }) => {
 
    return(

            <ul className="list-group">
                {children}
            </ul>
   
    )
};

export default ListMovies;