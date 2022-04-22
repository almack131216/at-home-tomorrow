/*
PARAMS:
bgImg: background-image url
titleText: string
titleEl: html elements (Example: <h1>This is a <strong>demo!</strong></h1>)
pText: string
classes: css class names as string
*/

const Hero = ({ bgImg, titleText, titleEl, pText, classes }) => {
  return (
    <div
      className={`hero hero-image ${classes}`}
      style={bgImg ? { backgroundImage: `url(${bgImg})` } : null}
    >
      <div className='hero__text'>
        {titleText ? <h1>{titleText}</h1> : null}
        {titleEl ? titleEl : null}
        {pText ? <p>{pText}</p> : null}
      </div>
    </div>
  )
}

export default Hero
