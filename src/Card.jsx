import React from 'react'
import { NavLink } from 'react-router-dom'
import "./index.css" 

function Card(props) {
  return (
  
    <div className="col-md-4 col-10 mx-auto">
    <div className="card " >
    <img src={props.imgsrc} className="card-img-top" alt="..." />
    <div className="card-body">
      <h5 className="card-title font-weight-bold">{props.title}</h5>
      <p className="card-text">
        {props.info}
      </p>
      <NavLink to="/" className="btn btn-primary">
        Go Course
      </NavLink>
    </div>
    </div>
  </div>

  )
}

export default Card