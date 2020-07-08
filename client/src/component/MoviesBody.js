import React, { Component } from 'react';
import ListMovies from './ListMovies';
import ListMovie from './ListMovie';
import axios from 'axios';
import _ from 'lodash';


class MoviesBody extends Component {
    constructor(props){
        super(props);
        this.state = {
            loading: true,
            movies: {}
        }
    }
    componentDidMount() {
        axios.get('/api/v1/movies').then(response => {
            this.setState({
                loading: false,
                movies: response.data
            })
        })
    }
    render() {
        if (this.state.loading === true) {
            return (
                <h3>Loading... Please wait a moment.</h3>
            );
        }
        return(
            <ListMovies>
                {this.renderMovies()}
            </ListMovies>
          
        );
    }
    renderMovies() {
        return _.map(this.state.movies, movie => {
            return (
                <ListMovie
                    name={movie.name}
                    genre={movie.genre}
                    rating={movie.rating}
                    explicit={movie.explicit}
                />
            )
        })
    }

}



export default MoviesBody;