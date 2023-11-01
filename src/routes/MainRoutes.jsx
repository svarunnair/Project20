import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Signup from '../pages/Signup'
import Signin from '../pages/Signin'
import Home from '../pages/Home'
import Cart from '../pages/Cart'

function MainRoutes() {

 let  token=localStorage.getItem('token');
  return (
    <div>
      <Routes>
        
        <Route path='/' element={<Signup/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/signin' element={<Signin/>}/>
        <Route path="/home" element={token&&<Home/>}/>
        <Route path='/cart' element={<Cart/>}/>
  



      </Routes>
    </div>
  )
}

export default MainRoutes