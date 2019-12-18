import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { Navbar, Nav, Button, Form, FormControl } from "react-bootstrap";
import { userLogout } from "../../actions/userActions";

const NavBar = props => {
  const currentUser = localStorage.getItem("uid");
  const links = (
    <Navbar bg="light" expand="lg">
      <Nav.Link as={Link} to="/">
        <i className="fa fa-instagram"></i>
      </Nav.Link>
    </Navbar>
  );
  const authLinks = (
    <Navbar bg="light" expand="lg">
      <Nav.Link as={Link} to="/feed">
        <i className="fa fa-instagram"></i>
      </Nav.Link>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link as={Link} to="/profile">
            Profile
          </Nav.Link>
          <Nav.Link as={Link} to="/">
            {" "}
            <span onClick={userLogout}>Logout</span>
          </Nav.Link>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-success">Search</Button>
        </Form>
      </Navbar.Collapse>
    </Navbar>
  );
  return currentUser ? authLinks : links;
};

export default connect(null, { userLogout })(NavBar);
