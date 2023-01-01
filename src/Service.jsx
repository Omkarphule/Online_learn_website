import React from "react";
import { Sdata } from "./Sdata";
import Card from "./Card";
import {motion} from 'framer-motion'

function Service() {
  return (
    <><motion.div
    intial={{opacity:0}}
    animate={{width:"100%"}}
    exit={{x: window.innerWidth, transition:{duration:0.3}}}>

      <div className="my-5 ">
        <h1 className="text-center">OUR SERVISES</h1>
      </div>
      <div className="container-fluid mb-5">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row gy-5">
              
                {
                  Sdata.map((val,ind)=>{
                    return<Card imgsrc={val.imgsrc}
                    title={val.title}
                    info={val.info}/>
                  })
                }
                             

              </div>
            </div>
          </div>
        </div>
        </motion.div>
    </>
  );
}

export default Service;
