import React from "react";
import abo from "../src/image/vem.jpg"
import Common from "./Componant";
import {motion} from 'framer-motion'


function About() {
  return (
    <>
    <motion.div
    intial={{opacity:0}}
    animate={{width:"100%"}}
    exit={{x: window.innerWidth, transition:{duration:0.3}}}>
      <Common name='Transforming tech education for the next generation of developers' 
      imgsrc={abo} 
      visit="/contact" 
      btname='contact now'
      infor="At Coding Ninjas, our mission is to continuously innovate the best ways to train the next 
      generation of developers and to transform the 
      the way tech education is delivered"/>
      </motion.div>
    </>
  );
}

export default About;
