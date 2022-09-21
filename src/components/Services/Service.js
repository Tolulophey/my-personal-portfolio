import React from 'react'


function Service(props) {
  return (
    <div className={props.class_name}>
      <div className="image">
        <div className='image-container'>
            <img  src={props.image} alt={props.alt} />
        </div>
      </div>
      <h2 className='stack'>{props.service}</h2>
      <p className='description'>{props.description}</p>
    </div>
  )
}

export default Service