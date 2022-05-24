import React from 'react'
import { Link } from 'react-router-dom'
import Container from 'react-bootstrap/esm/Container'
import { ExternalLink } from 'react-external-link';

const Investing = () => {

  const scatters = () => { window.open("https://scatters.com/en/")}
  const unibo = () => { window.open("https://www.unibo.com/")}
  const redcat88 = () => { window.open("https://www.redcat88.com/")}
  const helwit = () => { window.open("https://www.helwit.co.uk/")}
  const tampinha = () => { window.open("")}
  const spurs = () => { window.open("http://www.tottenhamhotspur.com")}
  const golf = () => { window.open("https://www.easthertsgolfclub.co.uk/")}
  const Ethereum = () => { window.open("https://ethereum.org/en/")}
  const Iota = () => { window.open("https://www.iota.org/")}

  function changeColor(e) {e.target.style.color= "aquamarine";}
  function changeBack(e) {e.target.style.color= "pink";}
  function changeColor2(e) {e.target.style.color= "pink";}
  function changeBack2(e) {e.target.style.color="#12263A";}
  function changeColor3(e) {e.target.style.color= "pink";}
  function changeBack3(e) {e.target.style.color="aquamarine";}
  
  
  


  return (
    <Container className="investing">
      <div className="intro">
        <h1>Investing</h1>
        <img className="photo-sports" src="https://i.imgur.com/ozzo8IG.jpg" alt="Neil Mcfayden"/>
        <p> I have an interest in investing and I am amatuer angel investor trying to build a solid start up portfolio.  These investments are mostly in gaming and gambing companies as this is where I have industry knowledge, connections and access.</p>
          {/* I am also interested in the blockchain and crypto currencies that have I beilieve have great use casses in the future, particularly <span className="link" onClick={Ethereum} onMouseEnter={changeColor} onMouseLeave={changeBack}>Ethereum</span> and <span className="link" onClick={Iota}onMouseEnter={changeColor} onMouseLeave={changeBack}>Iota</span>.  */}
        <p>Check out the webpages below to learn more about these great companies. Finally, if you ever find yourself in Brasilia, stop by for a drink at Tampinhia Bar</p>

      </div>
      <div className="investments">
        {/* <p><button type="button" className="map-button" onClick={scatters} onMouseEnter={changeColor2} onMouseLeave={changeBack2}>Scatters</button>Online casino group with different brands including Scatters.com, GoSlot and Sticky Wilds</p>
        <p><button type="button" className="map-button" onClick={unibo} onMouseEnter={changeColor2} onMouseLeave={changeBack2}>Unibo</button>Software company producing gamafication software for online casino's</p>
        <p><button type="button" className="map-button" onClick={redcat88} onMouseEnter={changeColor} onMouseLeave={changeBack2}>Redcat88</button>Esports company prodcuing Software</p>
        <p><button type="button" className="map-button" onClick={helwit} onMouseEnter={changeColor2} onMouseLeave={changeBack2}>Helwit</button>Flavoured mild Nicotine pouches.</p>
        <p><button type="button" className="map-button" onClick={tampinha} onMouseEnter={changeColor2} onMouseLeave={changeBack2}>Tampinhia Bar</button>Bar/music venue based in Brasilia opening in May 2022</p> */}
        <p><span className="link2" onClick={scatters} onMouseEnter={changeColor3} onMouseLeave={changeBack3}>Scatters Casino - </span>Online casino group with different brands including Scatters.com, GoSlot and Sticky Wilds</p>
        <p><span className="link2" onClick={unibo} onMouseEnter={changeColor3} onMouseLeave={changeBack3}>Unibo - </span>Software company producing gamafication software for online casino's</p>
        <p><span className="link2" onClick={redcat88} onMouseEnter={changeColor3} onMouseLeave={changeBack3}>Redcat88 - </span>Esports company prodcuing Software</p>
        <p><span className="link2" onClick={helwit} onMouseEnter={changeColor3} onMouseLeave={changeBack3}>Helwit - </span>Flavoured mild Nicotine pouches.</p>
        <p><span className="link2" onClick={tampinha} onMouseEnter={changeColor3} onMouseLeave={changeBack3}>Tampinha Bar - </span>Bar/music venue based in Brasilia opening in June 2022</p>
      </div>

      <div className="sports">
        <h1>Sports</h1>
        <img className="photo-sports" src="https://i.imgur.com/XEAe3DT.jpg" alt="Neil Mcfayden"/>
        <p>I've enjoyed playing a range of sports all my life, and i'll watch pretty much any sport on TV.  I've been playing football for over 30 years and still play for a local team. I am also a member and long suffering supporter of <span className="link" onClick={spurs} onMouseEnter={changeColor} onMouseLeave={changeBack}>Tottenham Hostspur</span>. As I get older I am winding down the football and playing more golf. I am a member of <span className="link" onClick={golf} onMouseEnter={changeColor} onMouseLeave={changeBack}>East Herts Golf Club</span></p>
      </div>



    
    
    </Container>
  )
}

export default Investing