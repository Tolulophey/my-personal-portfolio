import React from 'react'

function Testimonial(props) {
  
  return (
    <div className={`testimony ${props.className}`}>
      <div className="image">
        <img src={props.image} alt={props.name} />
      </div>
      <p className="name">{props.name}</p>
      <p className="company">{props.company}</p>
      <p className="text">{props.text}</p>
    </div>
  )
}
export default Testimonial