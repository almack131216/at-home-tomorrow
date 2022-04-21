import React from "react"

const Hero = ({bgImg, h1Text, h1El, pText}) => {
  return (
    <div className='hero hero-image' style={bgImg ? {backgroundImage: `url(${bgImg})`} : null}>
      <div className='hero__text'>
        {h1Text ? <h1>{h1Text}</h1> : null}
        {h1El ? h1El : null}
        {pText ? <p>{pText}</p> : null}
        {/* <button>Call to action</button> */}
      </div>
    </div>
  )
}

export default Hero
