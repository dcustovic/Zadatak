import React, { Component } from 'react';
import SingleMovieList from './SingleMovieList';
import CreateEditMovie from './CreateEditMovie';

class MovieCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            editing: false,
            name: props.name,
            genre: props.genre,
            rating: props.rating,
            explicit: props.name
        }
        this.onEdit = this.onEdit.bind(this);
        this.updateState = this.updateState.bind(this);
    }

    onEdit() {
        this.setState({
            editing: !this.state.editing
        })
    }
    updateState(name, genre, rating, explicit) {
        this.setState({
            name: name,
            genre: genre,
            rating: rating,
            explicit: explicit
        })
    }

    render() {
        const { name, genre, rating, explicit } = this.state
        if (this.state.editing) {
            return (
                <CreateEditMovie 
                name={name}
                genre={genre}
                rating={rating}
                explicit={explicit}
                toggleEdit={this.onEdit}
                id={this.props.id}
                updateState={this.updateState}
                />
            );
        }
        return (
            <SingleMovieList
            name={name}
            genre={genre}
            rating={rating}
            explicit={explicit}
            onEdit={this.onEdit}
            id={this.props.id}
            />
        )
        
    }
}

export default MovieCard;