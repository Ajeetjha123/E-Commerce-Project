import React, { Fragment } from "react";
import { Badge, Card, Container, Dropdown, Nav, Navbar } from "react-bootstrap";
import {FaShoppingCart} from 'react-icons/fa'
import { NavLink } from "react-router-dom";
const Header = () => {
  return<Fragment>
   <Navbar bg="dark" variant="dark" fixed='top'>
    <Container>
      <Navbar.Brand>
        <Navbar.Text>Shopping Cart</Navbar.Text>
      </Navbar.Brand>
      <Navbar.Brand className="navbrand">
        <Nav className="justify-content-center">
          <NavLink to="home" style={{paddingLeft: 50, textDecoration: "none", color: "White"}}>HOME</NavLink>
          <NavLink exact to="store" style={{paddingLeft: 50,textDecoration: "none", color: "White"}}>StORE</NavLink>
          <NavLink to="about" style={{paddingLeft: 50, textDecoration: "none", color: "White"}}>ABOUT</NavLink>
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
  </Navbar>
      <div className='mt-0'>
        <Card bg='secondary'>
          <Card.Body className='display-2 text-white text-center' style={{fontSize: 90, fontWeight: 700}}>The Generics</Card.Body>
        </Card>
      </div>
    </Fragment>

};

export default Header;
