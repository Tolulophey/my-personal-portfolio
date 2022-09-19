import React from 'react'

function Testimonial(props) {
  return (
    <div className="testimony">
      <div className="image">
        <img src={props.testifier} alt="testimony" />
      </div>
      <p className="name">{props.name}</p>
      <p className="company">{props.company}</p>
      <p className="text">{props.text}</p>
    </div>
  )
}

export default Testimonial