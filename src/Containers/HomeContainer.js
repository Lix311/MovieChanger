import React, { Component } from 'react';
import {Jumbotron, Container, Row, Col, Image, Button} from 'react-bootstrap'
import '../App.css';

class HomeContainer extends Component {
    state = {  }
    render() { 
        // changed emails for gits commits to work
        return (  
            <div>
                <Image src="assets/theatre.jpg" className='home-img'/>
                <button className='home-btn'>Enter</button>
                
            </div>
        );
    }
}
 
export default HomeContainer;