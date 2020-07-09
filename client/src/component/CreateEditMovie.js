import React, { Component } from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom';

class SingleMovieEdit extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: props.name || '',
            genre: props.genre || '',
            rating: props.rating || '',
            explicit: props.explicit || '',
        };

        this.onChangeItem = this.onChangeItem.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    onChangeItem(event) {
        const target = event.target;
        const name = target.name;

        this.setState({
            [name]: target.value
        })
    }
    handleSubmit(event) {
        event.preventDefault();
        const { name, genre, rating, explicit } = this.state;
        const { id, history } = this.props;

        // onda editiramo
        if (id) {
            axios.put(`/api/v1/movies/${id}`, {
                name: name,
                genre: genre,
                rating: rating,
                explicit: explicit
            }).then(() => {
                this.props.updateState(name, genre, rating, explicit);
                this.props.toggleEdit();
            })
        } else {
            // onda ne editiramo
            axios.post('/api/v1/movies', {
                name: name,
                genre: genre,
                rating: rating,
                explicit: explicit
            })
            .then(() => {
                history.push('/');
                
            })
        }
    }
    render() {
        const { name, genre, rating, explicit } = this.state;
        return (
            <div className={"container card"}>
            <form onSubmit={this.handleSubmit}>
                <div className="form-group mx-5 my-5">
                    <label htmlFor="name">Movie</label>
                    <input name="name" type="text" className="form-control" id="name" value={name} onChange={this.onChangeItem} />
                    
                    <label htmlFor="genre">Genre</label>
                    <input name="genre" type="text" className="form-control" id="genre" value={genre} onChange={this.onChangeItem} />
                    
                    <label htmlFor="rating">Rating</label>
                    <input name="rating" type="text" className="form-control" id="rating" value={rating} onChange={this.onChangeItem} />
                    
                    <label htmlFor="explicit">Explicit</label>
                    <input name="explicit" type="text" className="form-control" id="explicit" value={explicit} onChange={this.onChangeItem} />
                    
                    <button className="btn btn-warning btn-sm mt-2 ml-1 float-right" type="button" onClick={this.props.toggleEdit}>Cancel</button>
                    <button className="btn btn-success btn-sm mt-2  float-right" type="submit">Save</button>
                </div>
            </form>
            </div>
        )
    }
}


export default withRouter(SingleMovieEdit);