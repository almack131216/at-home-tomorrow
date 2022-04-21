import { Link } from "react-router-dom"

const SectionNav = () => {
  return (
    <>
      <div class='nav-container'>
        <nav>
          <ul>
            <li>
              <Link to='/'>The trends</Link>
            </li>
            <li>
              <Link to='/'>How we searched </Link>
            </li>
            <li>
              <Link to='/'>Anticipated searches</Link>
            </li>
            <li>
              <Link to='/'>How many searches?</Link>
            </li>
            <li>
              <Link to='/'>Search peaks and dips</Link>
            </li>
            <li>
              <Link to='/'>Our Methodology</Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  )
}

export default SectionNav
