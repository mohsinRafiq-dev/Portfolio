import { useState } from 'react'
import './App.css'
import Navbar from '../Components/Navbar'
import FirstSection from '../Components/First-Section/FirstSection'
import Projects from '../Components/projects_section/Projects'
import Skills from '../Components/Skills-section/Skills'
import About from '../Components/About-section/About'
import Contacts from '../Components/Contacts/Contacts'
import Footerr from '../Components/Footer/Footerr'

function App() {
  return (
    <>
    <Navbar/>
    <FirstSection/>
    <Projects/>
    <Skills/>
    <About/>
    <Contacts/>
    <Footerr/>
    </>
  )
}

export default App
