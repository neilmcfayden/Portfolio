import React from 'react'
import { Link } from 'react-router-dom'
import Container from 'react-bootstrap/esm/Container'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

const MainNavbar = () => {

  function changeColor(e) {e.target.style.color= "aquamarine";}
  function changeBack(e) {e.target.style.color= "#12263A";}

  return (
    <Container className="navbar">
      <Navbar.Brand>
        <Link className='nav-item' to='/' onMouseEnter={changeColor} onMouseLeave={changeBack}>Home</Link>
      </Navbar.Brand>
      <Navbar.Brand>
        <Link className='nav-item' to='/about' onMouseEnter={changeColor} onMouseLeave={changeBack}>About</Link>
      </Navbar.Brand>
      <Navbar.Brand>
        <Link className='nav-item' to='/portfolio' onMouseEnter={changeColor} onMouseLeave={changeBack}>Software Portfolio</Link>
      </Navbar.Brand>
      <Navbar.Brand>
        <Link className='nav-item' to='/poker' onMouseEnter={changeColor} onMouseLeave={changeBack}>Poker</Link>
      </Navbar.Brand>
      <Navbar.Brand>
        <Link className='nav-item' to='/interests' onMouseEnter={changeColor} onMouseLeave={changeBack}>Interests</Link>
      </Navbar.Brand>
      {/* <Navbar.Brand>
        <Link className='nav-item' to='/sports'>Sports</Link>
      </Navbar.Brand> */}
    </Container>
  )
}

export default MainNavbar