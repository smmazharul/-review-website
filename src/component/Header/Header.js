import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import logo from '../../images/logo.png'
import '../Header/Header.css'

const Header = () => {
    return (
        <div className="header">
           <Navbar className="Navbar"  variant="">
    <Container>
    <img src={logo} alt="" />
    <Nav className="me-auto nav-bar">
      <NavLink to="/home">Home</NavLink>
      <NavLink to="/service">Service</NavLink>
      <NavLink to="/about">About</NavLink>
      
      <NavLink to="/contact">Contact Us</NavLink>
    </Nav>
    </Container>
  </Navbar>
        </div>
    );
};

export default Header;