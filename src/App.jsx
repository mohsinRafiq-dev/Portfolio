import { useState } from 'react'
import './App.css'
import Navbar from '../Components/Navbar'
import Footerr from '../Components/Footer/Footerr'
import Home_page from '../Components/Pages/Home_page'
import Projects_page from '../Components/Pages/Projects_page'
import About_page from '../Components/Pages/About_page'
import Contacts_page from '../Components/Pages/Contacts_page'
import {BrowserRouter, Route,Routes} from "react-router-dom";

function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home_page/>}/>
      <Route path='/projects' element={<Projects_page/>}/>
      <Route path='/about-me' element={<About_page/>}/>
      <Route path='/contacts' element={<Contacts_page/>}/>
    </Routes>
    <Footerr/>
    </BrowserRouter>
    </>
  )
}

export default App
