import React from 'react'
import { NavLink } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Header = () => {
  return (
    <Navbar bg="dark" variant="dark">
        <Container>
        <NavLink to={"/"} className={"navbar-brand"}>CALCULATOR</NavLink>
        </Container>
      </Navbar>
  )
}

export default Header