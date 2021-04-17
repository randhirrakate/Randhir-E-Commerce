import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const Header = () => {
  return (
    <header>
      <Navbar bg='dark' variant='dark' collapseOnSelect expand='lg'>
        <Container>
          <LinkContainer to='/'>
            <Navbar.Brand >Randhir E-commerce</Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='ml-auto'>

            <LinkContainer to='/'>
                <Nav.Link>
                  {""}
                  <i className='fas fa-shopping-home'></i> HOME
                </Nav.Link>
              </LinkContainer>

              <LinkContainer to='/cart'>
                <Nav.Link>
                  {""}
                  <i className='fas fa-shopping-cart'></i> CART
                </Nav.Link>
              </LinkContainer>
              
              <LinkContainer to='/login'>
                <Nav.Link>
                  <i className='fas fa-user'></i> Sign In
                </Nav.Link>
              </LinkContainer>
            
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;