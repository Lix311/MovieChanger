import React from 'react';
import {Navbar as BootstrapNav} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from 'react-router-dom'




const NavBar = () => {
    return (  
        
        <BootstrapNav fixed='top' bg="dark" variant="dark">
            <BootstrapNav.Brand href="/login">BlockBuster 2.0</BootstrapNav.Brand>
            {/* <Nav className="mr-auto"> */}
            <div className='navbar-nav ml-auto'>
              <Link className='nav-item nav-link mx-3' to="/signup">SignUp</Link>
              <Link className='nav-item nav-link mx-3' to="/login">Login</Link>
            </div>
            {/* </Nav> */}
        </BootstrapNav>
  );
}
 
export default NavBar;


