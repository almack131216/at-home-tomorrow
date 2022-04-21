import { useState, useEffect } from "react"
// Components
import Hero from "../../components/Hero"
import Loading from "../../components/Loading"
import HeroBg from "../../assets/images/shutterstock_1654319035.jpg"

// Hook

const HomePage = () => {
  const [loading, setLoading] = useState(false);
  const h1El = <h1>At Home <strong>Tomorrow</strong></h1>

  useEffect(() => {
    document.title = "Home"
  }, [])

  return (
    <>
      <div className='page-container'>
        <Hero bgImg={HeroBg} h1El={h1El} pText={"Find out how today’s emerging interior trends are set to shape the luxury homes of tomorrow."} />
        {loading && <Loading />}       
      </div>
    </>
  )
}

export default HomePage
