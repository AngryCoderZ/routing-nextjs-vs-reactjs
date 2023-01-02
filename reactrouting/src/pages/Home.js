import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className='container'>
        <div style={{width:"100%",height:"100vh"}}
        className="d-flex justify-content-center align-items-center"
        >
            <Link to="/shop" >Shop Page</Link>
        </div>
    </div>
  )
}

export default Home