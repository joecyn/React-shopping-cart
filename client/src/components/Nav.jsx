import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { Link } from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar';
import React ,{useContext}from 'react';
import { Cartcontext } from '../context/cartContext';
import "./NavBar.css"
function Bar() {
    const Globalstate = useContext(Cartcontext);
    const state = Globalstate.state;
  return (
    <>
      
      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand as={Link} to="/">LOGO</Navbar.Brand>
          <Nav>
            <Nav.Link as={Link} to="/" >HOME</Nav.Link>
            <Nav.Link as={Link} to="/Cart"  className="navCart" >
             <i class="fa fa-shopping-cart fa-lg" aria-hidden="true" ></i>
              <span className='cart-icon'>{state.length}</span> 
            </Nav.Link>
          
          </Nav>
        </Container>
      </Navbar>

      
    </>
  );
}

export default Bar;