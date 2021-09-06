import { React } from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import "../styles/NavegationBar.css";
import { Link } from "react-router-dom";
const NavegationBar = () => {
  return (
    <Navbar bg="dark" expand="lg" className="d-flex ">
      <Navbar.Brand className="mx-4 text-white">
        <Link to="/" className="mx-4 text-white navbar-brand">
          Logo
        </Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        <Nav
          className="mx-4 my-2 my-lg-0 "
          style={{ maxHeight: "100px" }}
          navbarScroll
        >
          <Nav.Link href="/" className="text-white">
            <Link to="/" className="text-white nav-link">
              Home
            </Link>
          </Nav.Link>
          <Nav.Link href="/about" className="text-white">
            <Link to="/about" className="text-white nav-link">
              about
            </Link>
          </Nav.Link>
          <NavDropdown title="User" id="navbarScrollingDropdown">
            <NavDropdown.Item href="/login">
              <Link to="/login" className=" nav-link text-black">
                Login
              </Link>
            </NavDropdown.Item>
            <NavDropdown.Item href="/register">
              <Link to="/register" className=" nav-link text-black">
                Register
              </Link>
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="/tasks">
              <Link to="/tasks" className=" nav-link text-black">
                Tasks
              </Link>
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavegationBar;
