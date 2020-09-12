import React, {Component} from 'react';
import NavBar from '../Components/NavBar'
import {Route, Switch} from 'react-router-dom'
import MovieContainer from '../Containers/MovieContainer'

class MainContainer extends Component {
    render(){
  return (  
        <div>
            <NavBar/>
            <Switch>
                <Route
                
                    exact path="/"
                    render={()=>
                        <MovieContainer 
                        movies = {this.props.movies}
                        
                        />
                    }
                /> 
                
                <Route
                    exact path="/signup"
                    render={()=>
                        <h1>signup</h1>
                    }
                    
                /> 
            
                <Route
                    exact path="/login"
                    render={()=>
                        <h1>login</h1>
                    }
                />

                <Route
                    exact path="/details"
                    render={()=>
                        <h1>details</h1>
                    }
                />


            </Switch>
        </div>
    );
}
}
 
export default MainContainer;


