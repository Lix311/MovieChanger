import React, { Component } from 'react';

class Movie extends Component {
    state = {  }
    render() { 
        return (  
        <h2>{this.props.movie.title}</h2>
        );
    }
}
 
export default Movie;