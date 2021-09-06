import React from 'react';
import {Navbar,Button,Nav,NavDropdown,FormControl,Form} from 'react-bootstrap'
const NavegationBar = () => {
    return (
        <Navbar bg="dark" expand="lg"  className="d-flex ">
        <Navbar.Brand href="#" className="mx-4">Navbar scroll</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="mx-4 my-2 my-lg-0 "
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1" className="text-white">Home</Nav.Link>
            <Nav.Link href="#action2" className="text-white">Link</Nav.Link>
            <NavDropdown title="Link" id="navbarScrollingDropdown" className="text-white">
              <NavDropdown.Item href="#action3" >Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4" >Another action</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5" className="text-white">Something else here</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#" disabled className="text-white">
              Link
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
}

export default NavegationBar;
