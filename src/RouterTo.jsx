import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Login from './Login'
import Home from './Home'
import NotFound from './Notfound'
import ToastContainer from './MyToastContainer'
export default function RouterTo() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/:users/login' element={<Login/>}/>
      <Route path='*' element={<NotFound/>}/>
    </Routes>
    <ToastContainer/>
    </BrowserRouter>

    </>
  )
}
