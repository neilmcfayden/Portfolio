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


  return (
    <Container className="investing">
      <div className="intro">
        <h1>Investing</h1>
        <p> Although I like to mostly play it safe with tracker funds, I have branched out to start my own start-up portfolio. These investments are mostly in gaming and gambing companies as this is where I have some knowledge connections and access. If you are ever in Brasilia, please check out Tampinha Bar</p>
        <p>Check out the webpages below to learn more about these great start-ups</p>

      </div>
      <div className="investments">

        <p><button type="button" className="map-button" onClick={scatters}>Scatters</button>Online casino group with different brands including Scatters.com, GoSlot and Sticky Wilds</p>
        <p><button type="button" className="map-button" onClick={unibo}>Unibo</button>Software company producing gamafication software for online casino's</p>
        <p><button type="button" className="map-button" onClick={redcat88}>Redcat88</button>Esports company prodcuing Software</p>
        <p><button type="button" className="map-button" onClick={helwit}>Helwit</button>Flavoured mild Nicotine pouches.</p>
        <p><button type="button" className="map-button" onClick={tampinha}>Tampinhia Bar</button>Bar/music venue based in Brasilia opening in May 2022</p>
      
      </div>



    
    
    </Container>
  )
}

export default Investing