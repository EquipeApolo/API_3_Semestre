import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavBar() {
  return (
      <Navbar bg="primary" expand="lg">
      <Container>
        <Navbar.Brand href='/' style={{marginRight:10}}>
          <img src="/embraer-1-logo-black-and-white.png" width="250" alt="Logo Embraer" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
              <Nav.Link className='font-weight-bold' href="/">Performance Calculation</Nav.Link>
              <Nav.Link className='font-weight-bold' href="/registerAircraft">Aircraft Configuration</Nav.Link>
              <Nav.Link className='font-weight-bold' href="/aircrafts">Aircrafts</Nav.Link>
              <Nav.Link className='font-weight-bold' href="/users">Users</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;