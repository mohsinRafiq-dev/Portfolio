import React from 'react'
import FirstSection from '../First-Section/FirstSection'
import Projects from '../projects_section/Projects'
import Skills from '../Skills-section/Skills'
import About from '../About-section/About'
import Contacts from '../Contacts/Contacts'

const Home_page = () => {
  return (
    <>
    <FirstSection/>
    <Projects/>
    <Skills/>
    <About/>
    <Contacts/>
    </>
  )
}

export default Home_page