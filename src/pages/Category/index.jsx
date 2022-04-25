import { useEffect } from "react"
// Components
import Hero from "../../components/Hero"
import HeroBg from "../../assets/images/hero/living-room.jpg"
import SectionNav from "../../components/SectionNav"
import { Link } from "react-router-dom"

const CategoryPage = ({ title }) => {
  const titleEl = (
    <h1>
      At Home Tomorrow <strong>Living Room</strong>
    </h1>
  )

  useEffect(() => {
    document.title = title ? title : "Not Specified"
  }, [title])

  return (
    <>
      <div className='page-container'>
        <Hero bgImg={HeroBg} titleEl={titleEl} classes='hero--category' />
        <SectionNav />
        {/* 2do: remove (for demo use only) */}
        <div className='ul-tmp'>
          <h3>Click Me:</h3>
          <ul>
            <li>
              <Link to='/about'>About</Link>
            </li>
            <li>
              <Link to='/styles'>Styles</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default CategoryPage
