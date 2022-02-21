import React from "react";
import "../../styles/styles.scss";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { IoMenuSharp } from "react-icons/io5";

const Heading = () => {
  return (
    <Navbar>
      <Container>
        <Navbar.Brand as={Link} to="/">
          Howard Co.
        </Navbar.Brand>
        <Navbar.Toggle>
          <IoMenuSharp></IoMenuSharp>
        </Navbar.Toggle>
        <Navbar.Collapse>
          <Nav className="ms-auto">
            <Link to="/">Home</Link>
            <Link to="/fetch">FetchPexels</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Heading;
