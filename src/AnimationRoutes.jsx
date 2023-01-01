import React from 'react'
import Navbar from "./Navbar";
import { Footer } from "./Footer";
import { Routes ,Route, useLocation} from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import Home from "./Home";
import Service from "./Service";
import {AnimatePresence} from 'framer-motion'


function AnimationRoutes() {
    const location =useLocation();
  return (
    <>
    <Navbar/>
    <AnimatePresence >
   <Routes location={location} key={location.pathname}>
   <Route path="/" element={<Home/>}/>
   <Route path="/About" element={<About/>} />
   <Route path="/Service" element={<Service/> }/>
   <Route path="/Contact" element={<Contact/>} />
   </Routes>
   </AnimatePresence>
   <Footer/>
   </>
  )
}

export default AnimationRoutes