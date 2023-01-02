import React from 'react'
import {useRouter,withRouter} from 'next/router'
import Router from 'next/router';

const SinglePage = ({router}) => {
    const router = useRouter();
    // console.log(router)
    const {slug,img} = router.query;
    const redirect=()=>{
        // router.push("/shop")
        // Router.push("/shop")
        router.push({
            pathname:"/shop",
            query:{message:"redirect-from-single-page"}
        })
    }
  return (
    <div className='container-fluid p-4'>
        <div className="d-flex align-items-center justify-content-center">
            <img src={img} className="img-fluid"
            style={{height:"500px",cursor:"pointer"}}
            onClick={redirect}
            />
            <span className='ms-2'>{slug}</span>
        </div>
        </div>
  )
}

export default withRouter(SinglePage)