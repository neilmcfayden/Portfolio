import React from 'react'
import { Link } from 'react-router-dom'
import Container from 'react-bootstrap/esm/Container'

const Portfolio = () => {

  const project1Link = () => { window.open("https://neilmcfayden.github.io/Project1-Mastermind/")}
  const project1Git = () => { window.open("https://github.com/neilmcfayden/Project1-Mastermind")}
  const project2Link = () => { window.open("https://crypto-updates-aliali-neilmcfayden.netlify.app/")}
  const project2Git = () => { window.open("https://github.com/neilmcfayden/project2")}
  const project3Link = () => { window.open("https://space-book-sei61.herokuapp.com/")}
  const project3Git = () => { window.open("")}
  const project4Link = () => { window.open("")}
  const project4Git = () => { window.open("https://github.com/neilmcfayden/The-Open-Rota-Club")}

  const GA = () => { window.open("https://generalassemb.ly/education/software-engineering-immersive/london")}
  function changeColor(e) {e.target.style.color= "pink";}
  function changeBack(e) {e.target.style.color= "#12263A";}
  function changeColor2(e) {e.target.style.color= "pink";}
  function changeBack2(e) {e.target.style.color= "#7C9EB2";}



  return (
    <Container className="portfolio">
      <h1>My Software Portfolio</h1>
      <p>I built my portfolio as part of my <span className="link" onClick={GA} onMouseEnter={changeColor2} onMouseLeave={changeBack2}> General Assembly Software Enginnering Course</span>, a 12 week full-time, full-stack developer program.</p> 
      <div className="portfolio-container">
        <div className="project">
          <h2>Mastermind</h2>
          <img className="photo-portfolio" src="https://i.imgur.com/2CnTu4Z.png" alt="Neil Mcfayden"/>
          <img className="photo-portfolio" src="https://i.imgur.com/ggJUQWF.png" alt="Neil Mcfayden"/>
          <div className = "project-links">
            <button type="button" className="map-button" onClick={project1Link} onMouseEnter={changeColor} onMouseLeave={changeBack}>Open Project</button>
            <button type="button" className="map-button" onClick={project1Git} onMouseEnter={changeColor} onMouseLeave={changeBack}>GitHub</button>
          </div>

          <p className='portfolio-p'>Individual project (9 days). I built the popular mastermind game using <span className="port-skills"> HTML, CSS</span> and <span className="port-skills">JavaScript</span> that we had learned during the first 3 weeks of the course. 
            Mastermind is a strategy logic game that requires multiple JavaScript functions to run a game on a grid system. </p>
        </div>
        <div className="project">
          <h2>Crypto Updates</h2>
          <img className="photo-space" src="https://i.imgur.com/AIU6Jzy.png" alt="Neil Mcfayden"/>
          {/* <img className="photo-portfolio" src="https://i.imgur.com/zcH7e9K.png" alt="Neil Mcfayden"/> */}
          <div className = "project-links">
            <button type="button" className="map-button" onClick={project2Link} onMouseEnter={changeColor} onMouseLeave={changeBack}>Open Project</button>
            <button type="button" className="map-button" onClick={project2Git} onMouseEnter={changeColor} onMouseLeave={changeBack}>GitHub</button>
          </div>
          <p className='portfolio-p'>
            Team of 2 (48 hour hackathon). A classmate and I pair-coded a cryptocurrency application that displays the real time prices of the top 100 crypto-currencies. 
            This was a front-end project built using <span className="port-skills">React, React Bootstrap, React Router Dom</span> and <span className="port-skills">SASS</span>, with live price information retrieved from Coincap API using <span className="port-skills">Axios</span>. 
            We worked together using liveshare and both contributed to every stage of the project. 
          </p>
        </div>
        <div className="project">
          <h2>SpaceBook</h2>
          <img className="photo-space" src="https://i.imgur.com/Gu06FSD.png" alt="Neil Mcfayden"/>

          <div className = "project-links">
          <button type="button" className="map-button" onClick={project3Link} onMouseEnter={changeColor} onMouseLeave={changeBack}>Open Project</button>
          <button type="button" className="map-button" onClick={project3Git} onMouseEnter={changeColor} onMouseLeave={changeBack}>GitHub</button>
          </div>
          <p className='portfolio-p'>
          Team of 3 (8 days). I worked in a team to design and build a space travel booking website called SpaceBook. This was a full-stack project using <span className="port-skills">React, node.js</span> and <span className="port-skills">MongoDB</span>. We used <span className="port-skills">GitHub</span> and <span className="port-skills">Zoom</span> to work collaboratively, and we planned our project using <span className="port-skills">Figma</span> and <span className="port-skills">Trello</span>. I worked on <span className="port-skills">Axios</span> requests, back-end authentication, and front-end styling using <span className="port-skills">SASS</span>.
          </p>
        </div>
        <div className="project">
          <h2>The Open Rota Club</h2>
          <img className="photo-space" src="https://i.imgur.com/lDAZatr.png" alt="Neil Mcfayden"/>
          <div className = "project-links">
            <button type="button" className="map-button" onClick={project4Link} onMouseEnter={changeColor} onMouseLeave={changeBack}>Open Project</button>
            <button type="button" className="map-button" onClick={project4Git} onMouseEnter={changeColor} onMouseLeave={changeBack}>GitHub</button>
            </div>
          <p className="portfolio-p">
          Individual project (Phase 1:  9 days). I am building a full-stack-app called The Open Rota Club, which is a platform/meeting place for golfers wanting to play the courses on the Golf Open Championship rota, and share their scores and experiences. The React front-end is combined with a back-end using <span className="port-skills">Python, Django</span> and <span className="port-skills">TablePlus. Figma</span> and <span className="port-skills">Exccalidraw </span> were used as planning tools. 
          </p>
        </div>
      </div>



    
    </Container>
  )
}

export default Portfolio