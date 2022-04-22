import { useEffect } from "react"
// Components
import Hero from "../../components/Hero"
import HeroBg from "../../assets/images/hero/living-room.jpg"
import SectionNav from "../../components/SectionNav"

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
      </div>
    </>
  )
}

export default CategoryPage
