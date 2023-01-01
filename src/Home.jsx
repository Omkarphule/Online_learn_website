import React from "react";
import web from "../src/image/loc.jpg"
import {motion} from 'framer-motion'
import Common from "./Componant";

function Home() {
  return (
    <>
    <motion.div
    intial={{opacity:0}}
    animate={{width:"100%"}}
    exit={{x: window.innerWidth, transition:{duration:0.3}}}
    >
     <Common name=' Build the workforce of tomorrow, today. '
      imgsrc={web}
      visit="/service" 
      btname='get services now'
      infor="Build essential coding skills needed for front-end and back-end web development, 
      machine learning, iOS and Android app development, 
      and much more."/>
      </motion.div>
    </>
  );
}

export default Home;
