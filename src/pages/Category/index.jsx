import { useState, useEffect } from "react"
// Components
import Hero from "../../components/Hero"
import Loading from "../../components/Loading"
import HeroBg from "../../assets/images/hero/living-room.jpg"
import SectionNav from "../../components/SectionNav"
import Table from "../../components/Table"

const CategoryPage = ({title}) => {
  const [loading, setLoading] = useState(false);
  const h1El = <h1>At Home Tomorrow <strong>Living Room???</strong></h1>

  useEffect(() => {
    document.title = title ? title : 'Not Specified'
    setLoading(false)
  }, [title])

  return (
    <>
      <div className='page-container'>
        <Hero bgImg={HeroBg} h1El={h1El} classes="hero--category" />
        <SectionNav />
        <Table />
        {loading && <Loading />}       
      </div>
    </>
  )
}

export default CategoryPage
