import React from 'react'
import { Link } from 'react-router-dom'
import Container from 'react-bootstrap/esm/Container'

const About = () => {

  const GA = () => { window.open("https://generalassemb.ly/education/software-engineering-immersive/london")}
  function changeColor(e) {e.target.style.color= "aquamarine";}
  function changeBack(e) {e.target.style.color= "pink";}

  return (
    <Container className="about">
      <h1 className="title">My Story</h1>
      <div className="about-photos">
        <img className="photo-about" src="https://i.imgur.com/scYIWaJ.jpg" alt="Neil Mcfayden"/>
        <img className="photo-about" src="https://i.imgur.com/icI3V06.jpg" alt="Neil Mcfayden"/>
        <img className="photo-about" src="https://i.imgur.com/yL1zpIz.jpg" alt="Neil Mcfayden"/>
      </div>
      <p className="para">
      {/* I have spent the majority of my career as both a professional poker player, and the co-founder of a poker funding business. I now feel like I need a new challenge. I’d like to be involved in an industry that builds lasting products and services, and not simply be competing in a zero-sum game.  */}
      I decided to enrol on an intensive 12 week full-time course in <span className="link" onClick={GA} onMouseEnter={changeColor} onMouseLeave={changeBack}>Software Engineering with General Assembly</span> to develop core skills for a future in full stack development. Working with multiple languages and packages, I have built a portfolio that gives an accurate reflection of my current programming ability. 
      I believe the emphasis on logic and complex problem solving in poker will be transferable to software development, and I am ready to put the skills I've learned into practice. I am seeking a junior developer position, where I can learn as much as possible and hopefully add value to your organisation. 
      </p>

      <h1>My Skills</h1>
      <div className="skills">
        <p><span className="skill">Front-end:</span> HTML, CSS, SASS, React BootStrap, JavaScript, React JS, MapBox, Axios</p>
        <p><span className="skill">Back-end:</span> Node.js, Express, MongoDB, Mongoose, Python, Django, PostgreSQL, TablePlus, Insomnia</p>
        <p><span className="skill">Package/Other:</span> Heroku, Yarn, NPM, GitHub, Figma, ExcaliDraw, Trello</p>
        <p><span className="skill">Soft skills:</span> Project Management, Managing People, Financial Management, Advanced Problem Solving Skills</p>
      </div>
      {/* <Link to="/portfolio"><button type="button" className="home-button">Software Portfolio</button></Link> */}
    </Container>
  )
}

export default About