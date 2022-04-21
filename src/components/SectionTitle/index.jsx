import React from "react"

const SectionTitle = ({titleText}) => {
  return (
    <div className='section section--title'>
      {titleText ? <h3>{titleText}</h3> : null}
    </div>
  )
}

export default SectionTitle
