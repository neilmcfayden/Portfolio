import React from 'react'
import { Link } from 'react-router-dom'
import Container from 'react-bootstrap/esm/Container'

const Home = () => {

  const gitHubPage = () => { window.open("https://github.com/neilmcfayden") }
  const linkedInPage = () => { window.open("https://www.linkedin.com/in/neilmcfayden/")}
  const twitterPage = () => { window.open("https://twitter.com/NeilMcfayden")}
  const emailPage = () => { window.open("mailto:neilmcfayden@hotmail.co.uk")}

  function changeColor(e) {e.target.style.color= "aquamarine";}
  function changeBack(e) {e.target.style.color= "#12263A";}
  function changeColor2(e) {e.target.style.color= "pink";}
  function changeBack2(e) {e.target.style.color= "#12263A";}



  return (
    <Container className="homepage">
      <div className="title-div">
        <h1 className='title'>Welcome to Neil Mcfayden.com</h1>
        <img className="photo-home" src="https://i.imgur.com/tDLkhQp.jpg" alt="Neil Mcfayden"/>
        {/* <img className="photo-home" src="https://i.imgur.com/4IgkdA0.jpg" alt="Neil Mcfayden"/> */}
        <h3 id="description">I'm a Junior Software Engineer and former Pro Poker Player with a love for Sports, Investing and Travel. </h3>
      </div>
      <div className="home-links">
        <Link to="/about"><button type="button" className="home-button" onMouseEnter={changeColor} onMouseLeave={changeBack}>My Story</button></Link>
        <Link to="/portfolio"><button type="button" className="home-button" onMouseEnter={changeColor} onMouseLeave={changeBack}>Software Portfolio</button></Link>
        {/* <Link to="/poker"><button type="button" className="map-button">Poker</button></Link>
        <Link to="/investing"><button type="button" className="map-button">Investing</button></Link>
        <Link to="/sports"><button type="button" className="map-button">Sports</button></Link> */}
      </div>
      <div className="contacts">
      <button type="button" className="map-button" onClick={twitterPage} onMouseEnter={changeColor2} onMouseLeave={changeBack2}>Twitter</button>
      <button type="button" className="map-button" onClick={gitHubPage} onMouseEnter={changeColor2} onMouseLeave={changeBack2}>GitHub</button>
      <button type="button" className="map-button" onClick={linkedInPage} onMouseEnter={changeColor2} onMouseLeave={changeBack2}>LinkedIn</button>
      <button type="button" className="map-button" onClick={emailPage} onMouseEnter={changeColor2} onMouseLeave={changeBack2}>Email</button>
      </div>
    </Container>
  )
}

export default Home