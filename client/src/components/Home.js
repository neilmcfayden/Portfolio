import React from 'react'
import { Link } from 'react-router-dom'
import Container from 'react-bootstrap/esm/Container'

const Home = () => {

  const gitHubPage = () => { window.open("https://github.com/neilmcfayden") }
  const linkedInPage = () => { window.open("https://www.linkedin.com/in/neilmcfayden/")}
  const twitterPage = () => { window.open("https://twitter.com/NeilMcfayden")}
  const emailPage = () => { window.open("mailto:neilmcfayden@hotmail.co.uk")}

  return (
    <Container className="homepage">
      <div className="title-div">
        <h1 className='title'>Welcome to Neil Mcfayden.com</h1>
        <h3 id="description">I'm a Junior Software engineer and former Pro Poker Player with a love for Sports, Investing and Travel. </h3>
      </div>
      <div className="home-links">
        <Link to="/about"><button type="button" className="home-button">My Story</button></Link>
        <Link to="/portfolio"><button type="button" className="home-button">Software Portfolio</button></Link>
        {/* <Link to="/poker"><button type="button" className="map-button">Poker</button></Link>
        <Link to="/investing"><button type="button" className="map-button">Investing</button></Link>
        <Link to="/sports"><button type="button" className="map-button">Sports</button></Link> */}
      </div>
      <div className="contacts">
      <button type="button" className="map-button" onClick={twitterPage}>Twitter</button>
      <button type="button" className="map-button" onClick={gitHubPage}>GitHub</button>
      <button type="button" className="map-button" onClick={linkedInPage}>LinkedIn</button>
      <button type="button" className="map-button" onClick={emailPage}>Email</button>
      </div>
    </Container>
  )
}

export default Home