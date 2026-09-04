import { useState } from 'react'
import { BrowserRouter, Routes, Route, Navigate  } from 'react-router-dom'
import ProenctedRout from './components/ProenctedRout'
import Login from './components/pages/Login'
import NotFound from './components/pages/NotFound'
import Home from './components/pages/Home'
import Register from './components/pages/Register'
function App() {

  const Logout= ()=>{
    localStorage.clear()
    return <Navigate to ="/login"/>
  }

  return (
    <>
    <BrowserRouter>
      <Routes>

        <Route
        path='/home'
        element={
          <ProenctedRout>
            <Home/>
          </ProenctedRout>
        }        
        />
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element ={<Register/>}/>
        <Route path='/logout' element ={<Logout/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
    </BrowserRouter>
    
    </>
  )
}

export default App
