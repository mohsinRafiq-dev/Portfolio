import React, {useEffect,useRef} from 'react'
import FirstSection from '../First-Section/FirstSection'
import Projects from '../projects_section/Projects'
import Skills from '../Skills-section/Skills'
import About from '../About-section/About'
import Contacts from '../Contacts/Contacts'

const Home_page = () => {
  const contactRef = useRef(null); 
  const scrollToContact = () => {
    contactRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  useEffect(()=>{
    window.scrollTo(0,0);
  },[])
  return (
    <>
    <FirstSection scrollToContact={scrollToContact}/>
    <Projects/>
    <Skills/>
    <About/>
    <Contacts contactRef={contactRef}/>
    </>
  )
}

export default Home_page