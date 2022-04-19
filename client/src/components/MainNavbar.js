import React from 'react'
import { Link } from 'react-router-dom'
import Container from 'react-bootstrap/esm/Container'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

const MainNavbar = () => {

  return (
    <Container className="navbar">
      <Navbar.Brand>
        <Link className='nav-item' to='/'>Home</Link>
      </Navbar.Brand>
      <Navbar.Brand>
        <Link className='nav-item' to='/about'>About</Link>
      </Navbar.Brand>
      <Navbar.Brand>
        <Link className='nav-item' to='/portfolio'>Software Portfolio</Link>
      </Navbar.Brand>
      <Navbar.Brand>
        <Link className='nav-item' to='/poker'>Poker</Link>
      </Navbar.Brand>
      <Navbar.Brand>
        <Link className='nav-item' to='/investing'>Investing</Link>
      </Navbar.Brand>
      <Navbar.Brand>
        <Link className='nav-item' to='/sports'>Sports</Link>
      </Navbar.Brand>
    </Container>
  )
}

export default MainNavbar