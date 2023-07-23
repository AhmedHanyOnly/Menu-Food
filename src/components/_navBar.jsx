import React, { useState } from "react";
import { Container, Form, Nav, Navbar } from "react-bootstrap";

const NavBar = ({ searchFilter }) => {
  const [statValue, setStatValue] = useState("");
  
  const onSearch = (e) => {
    e.preventDefault();
    searchFilter(statValue);
    setStatValue("");
  };
  
  return (
      <Navbar fixed="top" bg="dark" variant="light" expand="lg">
        <Container>
          <Navbar.Brand href="#" className="text-light">
            Food Menu
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0 my-nav"
              style={{ maxHeight: "100px" }}
              navbarScroll
            ></Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2 form-controller"
                aria-label="Search"
                onChange={(e) => setStatValue(e.target.value)}
                value={statValue}
              />
              <button onClick={(e) => onSearch(e)} className="btn-search">
                Search
              </button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
  );
};

export default NavBar;
