import { useEffect } from "react"
// Components
import Hero from "../../components/Hero"
import HeroBg from "../../assets/images/hero/shutterstock_1654319035.jpg"
import SectionTitle from "../../components/SectionTitle"
import PanelBtns from "../../components/PanelBtns"

const HomePage = () => {
  const titleEl = (
    <h1>
      At Home <strong>Tomorrow</strong>
    </h1>
  )

  useEffect(() => {
    document.title = "Home"
  }, [])

  return (
    <>
      <div className='page-container'>
        <Hero
          bgImg={HeroBg}
          titleEl={titleEl}
          pText={
            "Find out how today’s emerging interior trends are set to shape the luxury homes of tomorrow."
          }
        />
        <SectionTitle titleText='Select a room to begin' />
        <PanelBtns />
      </div>
    </>
  )
}

export default HomePage
