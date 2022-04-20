import React from 'react'
import { Link } from 'react-router-dom'
import Container from 'react-bootstrap/esm/Container'

const Poker = () => {

  const livePoker = () => { window.open("https://pokerdb.thehendonmob.com/player.php?a=r&n=95175")}
  const onlinePoker = () => { window.open("https://www.pocketfives.com/profiles/thevisionary/")}
  const wSOP = () => { window.open("https://www.wsop.com/players/profile/?playerID=62107")}

  return (
    <Container className="poker">
      <div className="intro">
        <h1>My Poker Career</h1>
        <p>I've travelled extensively around the world to compete in high level live poker tournaments on the European Poker Tour, World Poker Tour, and the World Series of Poker.</p>
      </div>
      <div className="results">
        <h3>Key achivements</h3> 
        <p>Live Poker - 2 World Series of Poker rings won in Las Vegas, 1 UK Poker Tour main event title</p>
        <p>Online Poker - Collective cashes of over $4m. Biggest Cash was a 3rd Place finish in a World Championchip of Online poker event for $269,000</p>
      </div>
      <div className="links">
        <h3>External links</h3>
        <p>Below you will find my Hendon Mob database with my live poker results as well as my World Seies of Poker Profile and my pocket fives profile page which shows my online poker results.</p>
        <div className = "project-links">
          <button type="button" className="home-button" onClick={livePoker}>Live Poker Results </button>
          <button type="button" className="home-button" onClick={onlinePoker}>Online Poker results </button>
          <button type="button" className="home-button" onClick={wSOP}>World Series of Poker Results</button>
        </div>
        
      </div>
      <div className="poker-gallery">

      </div>
    </Container>
  )
}

export default Poker