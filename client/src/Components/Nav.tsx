import React from 'react';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';



function NavBar() {
  // let user = JSON.parse(localStorage.getItem('user-info'));
  return (
      <Navbar bg="primary" expand="lg">
      <Container>
        <Navbar.Brand href='/' style={{marginRight:10}}>
          <img src="/embraer-1-logo-black-and-white.png" width="200" alt="Logo Embraer" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
              <Nav.Link className='font-weight-bold' href="/calculation">Performance Calculation</Nav.Link>
              <Nav.Link className='font-weight-bold' href="/registerAircraft">Aircraft Configuration</Nav.Link>
              <Nav.Link className='font-weight-bold' href="/aircrafts">Aircrafts</Nav.Link>
              <Nav.Link className='font-weight-bold' href="/users">Users</Nav.Link>
          </Nav>
          <NavDropdown title={
            <span style={{opacity: 0.9, color: 'rgba(0,0,0,.5)'}} className='font-weight-bold'>User Name</span>
            }>
          </NavDropdown>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;