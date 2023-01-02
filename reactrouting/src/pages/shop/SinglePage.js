import React from 'react'
import { useParams } from 'react-router-dom'
import { useLocation,useNavigate,Navigate } from 'react-router-dom';

const SinglePage = () => {
    const param = useParams();
    const location = useLocation()
    const navigate=useNavigate()
    // console.log(location)
    // const img = new URLSearchParams(location.search).get('img')
    // console.log(img)
    const { img, name } = location.state.item
    const redirect=()=>{
        navigate("/shop")
    }
    return (
        <div className='container-fluid'>
            {/* <Navigate to="/shop"/> */}
            <div className="d-flex">
                <img src={img} className="img-fluid"
                    style={{ height: "500px", cursor: "pointer" }} onClick={redirect} />
                <span className='ms-2'>{param.slug}</span>
            </div>
        </div>
    )
}

export default SinglePage