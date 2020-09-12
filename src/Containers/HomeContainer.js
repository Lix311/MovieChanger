import React, { Component } from 'react';
import {withRouter} from 'react-router-dom'
import {Jumbotron, Container, Row, Col, Image, Button} from 'react-bootstrap'
import '../App.css';

class HomeContainer extends Component {
    state = {  }
    
    clickHandler = () => {
        this.props.history.push('/home')
    }

    render() { 
        // changed emails for gits commits to work
        return (  
            <div>
                <Image src="assets/theatre.jpg" className='home-img'/>
                <button onClick={this.clickHandler} className='home-btn'>Enter</button>
                
            </div>
        );
    }
}
 
export default withRouter(HomeContainer);