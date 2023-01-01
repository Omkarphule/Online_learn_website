import React, { useState } from "react";
import {motion} from 'framer-motion'

function Contact() {
  const [data,setData]=useState({
    fullname:'',
    phone:'',
    email:'',
    msg:'',
   });

   const InputEvent=(event)=>{
const{ name, value }=event.target;

setData((preVal)=>{
  return{
    ...preVal,
    [name]:value,

  };
})
   };

  const formSubmit=(e)=>{
   e.preventDefault();
   alert(`${data.fullname} submited`)
  }

  return (
    <>
    <motion.div
     intial={{opacity:0}}
     animate={{width:"100%"}}
     exit={{x: window.innerWidth, transition:{duration:0.3}}}>
      <div className="my-5">
        <h1 className="text-center"> CONTACT US</h1>
      </div>
      <div className="container contact_div">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">
            <form onSubmit={formSubmit}>
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">
                  Full Name
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="exampleFormControlInput1"
                  name="fullname"
                  value={data.fullname}
                  onChange={InputEvent}
                  placeholder="Enter your name"
                />
              </div>

              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">
                  Phone
                </label>
                <input
                  type="number"
                  class="form-control"
                  id="exampleFormControlInput1"
                  name="phone"
                  value={data.phone}
                  onChange={InputEvent}
                  placeholder="mobile number"
                />
              </div>

              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  class="form-control"
                  id="exampleFormControlInput1"
                  name="email"
                  value={data.email}
                  onChange={InputEvent}
                  placeholder="name@example.com"
                />
              </div>

              <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">
                  Massage
                </label>
                <textarea
                  class="form-control"
                  name="msg"
                  value={data.msg}
                  onChange={InputEvent}
                  id="exampleFormControlTextarea1"
                  rows="3"
                ></textarea>
              </div>
              <div class="col-12">
                <button class="btn btn-primary" type="submit">
                  Submit form
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      </motion.div>
    </>
  );
}

export default Contact;
