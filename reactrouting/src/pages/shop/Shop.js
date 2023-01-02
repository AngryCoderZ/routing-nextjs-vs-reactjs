import React from 'react'
import { Link } from 'react-router-dom'

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
        name: "towel1"
    },
]
const Shop = () => {
    return (
        <div className='container-fluid'>
            <div className="row">
                {data.map(item => (
                    <div className="col-lg-4" key={item.name}>
                        <div className="shadow">
                            <img src={item.img} alt={item.name}
                                className="img-fluid" style={{ height: "400px" }}
                            />
                            {/* <Link to={`/shop/${item.name}?img=${item.img}`}
                                state={{ item }}
                            >View Product
                            </Link> */}
                            <Link to={{
                                pathname: `/shop/${item.name}`,
                                search: `?img=${item.img}`
                            }}
                                state={{ item }}
                            >
                                View Product
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Shop