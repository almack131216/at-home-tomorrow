import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import PanelBtnsData from "../../assets/data.js"
import Loading from "../Loading"

const PanelBtns = () => {
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState([])

  useEffect(() => {
    setLoading(true)
    const getData = PanelBtnsData
    setData(getData)
    console.log(getData)
    getData && getData.length > 0 && setLoading(false)
  }, [])

  if (loading || !data.length) return <Loading />

  return (
    <>
      <div className='panel-btns-container'>
        {data.map((item) => (
          <div key={item.id} className='panel-btn'>
            <Link to={item.url}>
              <div
                className={`panel-btn__img-container detail detail--bgColor${item.swatchColorNo}`}
              >
                <div className='img-crop'>
                  <img src={item.image_url} alt='' />
                </div>
              </div>
              <div className='panel-btn__txt-container'>
                <span>{item.name}</span>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </>
  )
}

export default PanelBtns
