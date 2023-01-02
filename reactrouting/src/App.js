import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './pages/Home'
import Shop from './pages/shop/Shop'
import SinglePage from './pages/shop/SinglePage'
import NoPage from './pages/404'

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/shop' element={<Shop/>}/>
        <Route path='/shop/:slug' element={<SinglePage/>}/>
        <Route path='*' element={<NoPage/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App