import { Container, Navbar, Nav } from "react-bootstrap";
import LOGO from "../../Assets/logo.png";
import { AiFillHome } from "react-icons/ai";
import { SiGnuprivacyguard } from "react-icons/si";
import { FaSignInAlt } from "react-icons/fa";
import {  Link } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
      <Navbar
        expand="lg"
        style={{ backgroundColor: "black", position: "sticky" }}
        variant="dark"
        fixed="top"
      >
        <Container>
          <Navbar.Brand>
            <img 
              src={LOGO}
              width="80%"
              height="50"
              className="d-inline-block align-top"
              alt="logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse className="justify-content-end fw-bold">
            <Nav>
              <Nav.Link as={Link} to="/" className="me-5">
                <AiFillHome />
                <br />
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/signup" className="me-5">
                <SiGnuprivacyguard />
                <br />
                SignUp
              </Nav.Link>
              <Nav.Link as={Link} to="/signin" className="me-5">
                <FaSignInAlt />
                <br />
                SignIn
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
  );
}

export default Header;
