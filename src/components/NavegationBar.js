import { React } from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import "../styles/NavegationBar.css";
import { Link } from "react-router-dom";
import useAuth from '../components/auth/useAuth';
const NavegationBar = () => {
  const auth = useAuth(); 

  const handleLogout= () => {
    auth.logout()


  }
  return (
    <Navbar expand="lg" className="d-flex background ">
      <Navbar.Brand className="mx-4 text-white">
        <Link to="/" className=" navbar-brand ">
        <i class="fab fa-react fs-1 mb-1 react"></i>
        </Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll"  className="text-white"/>
      <Navbar.Collapse id="navbarScroll" >
        <Nav
          className="mx-4 my-2 my-lg-0 "
          style={{ maxHeight: "100px",
                  }}
          navbarScroll
        >
          <Nav.Link href="/" className="text-white ">
            <Link to="/" className="text-white nav-link fs-3">
              Home
            </Link>
          </Nav.Link>
          <Nav.Link href="/about" className="text-white">
            <Link to="/about" className="text-white nav-link fs-3">
              about
            </Link>
          </Nav.Link>
          <NavDropdown title="User" id="navbarScrollingDropdown" className="background fs-3">
            {!auth.islogged() &&
              <NavDropdown.Item href="/login" >
              <Link to="/login" className=" nav-link text-black">
                Login
              </Link>
            </NavDropdown.Item>
            
            }
            <NavDropdown.Item href="/register" >
              <Link to="/register" className=" nav-link text-black">
                Register
              </Link>
            </NavDropdown.Item>
            {auth.islogged() &&
              <NavDropdown.Item href="/login" >
              <Link to="/login" className=" nav-link text-black" onClick={handleLogout}>
                Log-out
              </Link>
            </NavDropdown.Item>
            }
            <NavDropdown.Divider />
            <NavDropdown.Item href="/tasks">
              <Link to="/tasks" className=" nav-link text-black ">
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
