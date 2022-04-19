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

  return (
    <Container className="portfolio">
      <h1>My Software Portfolio</h1>
      <p>I built my portfolio as part of my General Assembly Software Enginnering Course, a 12 week full-time, full-stack developer program.</p> 
      <div className="portfolio-container">
        <div className="project">
          <h2>Mastermind</h2><button type="button" className="map-button" onClick={project1Link}>Open Project</button><button type="button" className="map-button" onClick={project1Git}>Github</button>
          <p>I built the popular mastermind game using the HTML, CSS and JavaScript that we had learned during the first 3 weeks of the course. 
            Mastermind is a strategy logic game that requires multiple JavaScript functions to run a game on a grid system. </p>
        </div>
        <div className="project">
          <h2>Crypto Updates</h2><button type="button" className="map-button" onClick={project2Link}>Open Project</button><button type="button" className="map-button" onClick={project2Git}>Github</button>
          <p>
            A classmate and I pair-coded a cryptocurrency application that displays the real time prices of the top 100 crypto-currencies. 
            This was a front-end project built using React, React Bootstrap, React Router Dom and SASS, with live price information retrieved from Coincap API using Axios. 
            We worked together using liveshare and both contributed to every stage of the project. 
          </p>
        </div>
        <div className="project">
          <h2>SpaceBook</h2><button type="button" className="map-button" onClick={project3Link}>Open Project</button><button type="button" className="map-button" onClick={project3Git}>Github</button>
          <p>
          I worked in a team to design and build a space travel booking website called SpaceBook. This was a full-stack project using React, node.js and MongoDB. We used GitHub and Zoom to work collaboratively, and we planned our project using Figma and Trello. I worked on axios requests, back-end authentication, and front-end styling using SASS.
          </p>
        </div>
        <div className="project">
          <h2>The Open Rota Club</h2><button type="button" className="map-button" onClick={project4Link}>Open Project</button><button type="button" className="map-button" onClick={project4Git}>Github</button>
          <p>
          I am building a full-stack-app called The Open Rota Club, which is a platform/meeting place for golfers wanting to play the courses on the Golf Open Championship rota, and share their scores and experiences. The React front-end is combined with a back-end using Python, Django and TablePlus. Figma and Exccalidraw were used as planning tools. 
          </p>
        </div>
      </div>



    
    </Container>
  )
}

export default Portfolio