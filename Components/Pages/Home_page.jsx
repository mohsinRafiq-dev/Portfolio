import React, {useEffect,useRef} from 'react'
import FirstSection from '../First-Section/FirstSection'
import Projects from '../projects_section/Projects'
import Skills from '../Skills-section/Skills'
import About from '../About-section/About'
import Contacts from '../Contacts/Contacts'

const Home_page = () => {
  useEffect(() => {
    if (performance.getEntriesByType("navigation")[0]?.type === "reload") {
      window.scrollTo(0, 0);
    }
  }, []);
  const contactRef = useRef(null);

  const scrollToContact = () => {
    if (contactRef.current) {
      const headerOffset = 70;
      const elementPosition = contactRef.current.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" }); 
  }, []);
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