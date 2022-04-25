import { useEffect } from "react"

const AboutPage = () => {
  useEffect(() => {
    document.title = "About"
  }, [])

  return (
    <div className='page-container'>
      <h1>About</h1>
      <hr />
      <h3>Style</h3>
      <ul>
        <li>Using node-sass to compile individual .scss files</li>
        <li>Files are in the same folder as associated .jsx file</li>
        <li>JSX & SCSS files both called index</li>

        <li>
          See [assets/sass] for general (root properties)
          <ul>
            <li>[_base.scss] root variables and basic classes</li>
            <li>[_mixins.scss] for shared styles</li>
            <li>[_typography.scss] Font size is easy to control
              <ol>
                <li>[html] font-size: 62.5%;</li>
                <li>[body] font-size: 1.6rem;</li>
                <li>
                  ..now, I can calculate font sizes easily (1.6rem = 16px,
                  2.4rem = 24px, etc)
                </li>
              </ol>
            </li>
          </ul>
        </li>
      </ul>
      <hr />
      <h3>With more time...</h3>
      <ul>
        <li>Make fully responsive down to 320px wide - I have added basic responsive control, but not full</li>
        <li>Test on multiple browsers with postcss</li>
        <li>Add compliance code for readability (aria, alts, titles etc)</li>
      </ul>
    </div>
  )
}

export default AboutPage
