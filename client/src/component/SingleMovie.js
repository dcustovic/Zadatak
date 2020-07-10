import React, { Component } from 'react';
import MovieCard from './MovieCard'
import axios from 'axios';

class SingleMovie extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            movie: {}
        };
    }
    componentDidMount() {
        const id = this.props.match.params.id;
        axios.get(`/api/v1/movies/${id}`).then((res) => {
            this.setState({
                loading: false,
                movie: res.data
            })
        })
    }
    render() {
        if (this.state.loading) {
            return (
                <h4>Loading... Please wait.</h4>
            )
        }
        return (
            <MovieCard 
                name={this.state.movie.name}
                genre={this.state.movie.genre}
                rating={this.state.movie.rating}
                explicit={this.state.movie.explicit}
                id={this.state.movie.id}
            />
        )
    }
}

export default SingleMovie;