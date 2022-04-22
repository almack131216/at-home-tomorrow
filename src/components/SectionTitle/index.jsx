/*
PARAMS:
titleText: string
titleEl: html elements (Example: <h1>This is a <strong>demo!</strong></h1>)
pText: string
classes: css class names as string
*/

const SectionTitle = ({ titleText, classes }) => {
  return (
    <div className={`section section--title ${classes}`}>
      {titleText ? <h3>{titleText}</h3> : null}
    </div>
  )
}

export default SectionTitle
