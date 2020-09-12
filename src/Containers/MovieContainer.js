import React from 'react';
import Movie from '../Components/Movie'

const MovieContainer = (props) => {
    return (  
        <div>
          {console.log(props.movies.results)}
        {props.movies.results.map(movie => 
            <Movie                     
                key={movie.id}
                movie={movie}
            />
        )}
        
        </div>
        );
    
}
 
export default MovieContainer;