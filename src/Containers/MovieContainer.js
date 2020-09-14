import React from 'react';
import Movie from '../Components/Movie'


const MovieContainer = (props) => { 
    return (   
        <div>
        <div className='movie-container'>
        
        {props.movies.results.map(movie => 
            <Movie                     
                key={movie.id}
                movie={movie}
            />
        )}
        
        </div>
        </div>
        
        );
    
}
 
export default MovieContainer;