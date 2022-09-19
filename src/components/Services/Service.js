import React from 'react'


function Service(props) {
  return (
    <div className={props.class_name}>
      <div className="image">
        <img  src={props.image} alt={props.alt} />
      </div>
      <h2 className='stack'>{props.service}</h2>
      <p className='description'>{props.description}</p>
    </div>
  )
}

export default Service