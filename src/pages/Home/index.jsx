import { useState, useEffect } from "react"
// Components
// import Grid from "../../components/Grid"
import Loading from "../../components/Loading"

// Hook

const HomePage = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    document.title = "Home"
  }, [])

  return (
    <>
      <div className='page-container'>

        {loading && <Loading />}
       
      </div>
    </>
  )
}

export default HomePage
