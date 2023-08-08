import React from "react";
import { Badge, Container, Dropdown, Nav, Navbar } from "react-bootstrap";
import {FaShoppingCart} from 'react-icons/fa'
import { NavLink } from "react-router-dom";
const Header = () => {
  return <Navbar bg="dark" variant="dark">
    <Container>
      <Navbar.Brand>
        <Navbar.Text>Shopping Cart</Navbar.Text>
      </Navbar.Brand>
      <Navbar.Brand className="navbrand">
        <Nav className="justify-content-center">
          <NavLink to="/">HOME</NavLink>
          <NavLink to="store">StORE</NavLink>
          <NavLink to="about">ABOUT</NavLink>
        </Nav>
      </Navbar.Brand>
      <Nav>
        <Dropdown alignRight>
         <Dropdown.Toggle variant="success">
          <FaShoppingCart color="white" fontSize="25px" />
          <Badge>{10}</Badge>
         </Dropdown.Toggle>
         <Dropdown.Menu><span style={{padding: 10}}>Cart Is Empty!</span></Dropdown.Menu>
        </Dropdown>
      </Nav>
    </Container>
  </Navbar>;
};

export default Header;
