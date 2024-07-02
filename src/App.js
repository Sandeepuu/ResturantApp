import React from 'react'

import Navbar from './Components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './Components/Router/Home'
import Menu from './Components/Router/Menu'
import Contact from './Components/Router/Contact'
import About from './Components/Router/About'


const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/Home' element={<Home/>}></Route>
        <Route path='/Menu' element={<Menu/>}></Route>
        <Route path='/Contact' element={<Contact/>}></Route>
        <Route path='/About' element={<About/>}></Route>
      </Routes>
    </div>
  )
}

export default App

