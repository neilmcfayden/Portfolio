import React from 'react'
import { Link } from 'react-router-dom'
import Container from 'react-bootstrap/esm/Container'

const Poker = () => {

  const livePoker = () => { window.open("https://pokerdb.thehendonmob.com/player.php?a=r&n=95175")}
  const onlinePoker = () => { window.open("https://www.pocketfives.com/profiles/thevisionary/")}
  const wSOP = () => { window.open("https://www.wsop.com/players/profile/?playerID=62107")}
  const EPT = () => { window.open("https://www.pokerstarslive.com/ept/?no_redirect=1")}
  const WPT = () => { window.open("https://www.worldpokertour.com/tours/main-tour/")}
  const WSOP = () => { window.open("https://www.wsop.com/")}
  const GUKPT = () => { window.open("https://www.gukpt.com/neil-mcfayden-beats-pros-luton-secure-best-ever-poker-result-gukpt/")}
  const wsopR = () => { window.open("https://www.wsop.com/pdfs/reports/17269-final-report.pdf")}
  const WCOOP = () => { window.open("https://www.wcoop.com")}



  function changeColor(e) {e.target.style.color= "pink";}
  function changeBack(e) {e.target.style.color= "#12263A";}
  function changeColor2(e) {e.target.style.color= "aquamarine";}
  function changeBack2(e) {e.target.style.color= "pink";}

  return (
    <Container className="poker">
      <div className="intro">
        <h1>My Poker Career</h1>
        <img className="photo-poker" src="https://i.imgur.com/R8iyrZ7.jpg" alt="Neil Mcfayden"/>
        {/* <img className="photo-poker" src="https://i.imgur.com/tDLkhQp.jpg" alt="Neil Mcfayden"/> */}
        
        <p>I've travelled extensively around the world to compete in high level live poker tournaments on the <span className="link" onClick={EPT} onMouseEnter={changeColor2} onMouseLeave={changeBack2}>European Poker Tour</span>, <span className="link" onClick={WPT} onMouseEnter={changeColor2} onMouseLeave={changeBack2}>World Poker Tour</span>, and the <span className="link" onClick={WSOP} onMouseEnter={changeColor2} onMouseLeave={changeBack2}>World Series of Poker</span>.</p>
      </div>
      <div className="results">
        <h3>Key achivements</h3> 
        <p>Live Poker - 2 <span className="link" onClick={wsopR} onMouseEnter={changeColor2} onMouseLeave={changeBack2}>World Series of Poker rings</span> won in Las Vegas, 1 <span className="link" onClick={GUKPT} onMouseEnter={changeColor2} onMouseLeave={changeBack2}>UK Poker Tour Main Event</span> title</p>
        <p>Online Poker - Collective cashes of over $4m. Biggest Cash was a 3rd Place finish in a <span className="link" onClick={wsopR} onMouseEnter={changeColor2} onMouseLeave={changeBack2}>World Championchip of Online Poker (WCOOP)</span>event for $269,000</p>
      </div>
      <div className="links">
        <h3>External links</h3>
        <p>Below you will find my Hendon Mob database with my live poker results as well as my World Seies of Poker Profile and my pocket fives profile page which shows my online poker results.</p>
        <div className = "project-links">
          <button type="button" className="home-button" onClick={livePoker} onMouseEnter={changeColor} onMouseLeave={changeBack}>Live Poker Results </button>
          <button type="button" className="home-button" onClick={onlinePoker} onMouseEnter={changeColor} onMouseLeave={changeBack}>Online Poker results </button>
          <button type="button" className="home-button" onClick={wSOP} onMouseEnter={changeColor} onMouseLeave={changeBack}>World Series of Poker Results</button>
        </div>
        
      </div>
      <img className="photo-poker2" src="https://i.imgur.com/AhqCJz5.jpg" alt="Neil Mcfayden"/>
      <div className="poker-gallery">

      </div>
    </Container>
  )
}

export default Poker