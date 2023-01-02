import React from 'react'
import Link from 'next/link'

const data = [
    {
        img: "https://t.ly/dail",
        name: "towel1"
    },
    {
        img: "https://t.ly/hT_n",
        name: "towel2"
    },
    {
        img: "https://t.ly/eNDyc",
        name: "towel3"
    },
]

const Shop = () => {
    return (
        <div className='container-fluid pt-4'>
            <div className="row">
                {data.map(item => (
                    <div className="col-md-4">
                        <img src={item.img} className="img-fluid" style={{ height: "300px" }} />
                        <Link href={{
                            pathname: `/shop/${item.name}`,
                            query: { img: item.img }
                        }}>
                            <span className='text-dark'>{item.name}</span>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Shop