import { useEffect } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
import "./App.css";
import Navbar from "../Components/Navbar";
import Footerr from "../Components/Footer/Footerr";
import Home_page from "../Components/Pages/Home_page";
import Projects_page from "../Components/Pages/Projects_page";
import About_page from "../Components/Pages/About_page";
import Contacts_page from "../Components/Pages/Contacts_page";

const RouteChangeHandler = () => {
  const location = useLocation();

  useEffect(() => {
    NProgress.start();
    setTimeout(() => {
      NProgress.done();
    }, 50);

    return () => {
      NProgress.done();
    };
  }, [location.pathname]);

  return null;
};

const ScrollToTopOnRefresh = () => {
  useEffect(() => {
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" }); 
    }, 100); 
  }, []);

  return null;
};

function App() {
  return (
    <BrowserRouter>
      <RouteChangeHandler />
      <ScrollToTopOnRefresh /> 
      <Navbar />
      <Routes>
        <Route path="/" element={<Home_page />} />
        <Route path="/projects" element={<Projects_page />} />
        <Route path="/about-me" element={<About_page />} />
        <Route path="/contacts" element={<Contacts_page />} />
      </Routes>
      <Footerr />
    </BrowserRouter>
  );
}

export default App;
