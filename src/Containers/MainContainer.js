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
                
                    exact path="/home"
                    render={()=>
                        <MovieContainer 
                        jobs = {this.props.jobs}
                        
                        />
                    }
                /> 
                
                <Route
                    exact path="/signup"
                    
                /> 
            
                <Route
                    exact path="/login"
                    
                />

                <Route
                    exact path="/details"
                    
                />

                <Route
                    exact path="/signup"
                    
                />

            </Switch>
        </div>
    );
}
}
 
export default MainContainer;


