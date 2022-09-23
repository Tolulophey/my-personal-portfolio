import React from 'react'
import data from './serviceData'
import Service from './Service'
import './service.css'

function ServiceList() {
    const service = data.map(service=>{
        return <Service 
            image={service.image}
            class_name={service.name}
            alt={service.name}
            service={service.service}
            description={service.description}
        />
    })
  return (
    <div id='Services' className='service'>
        {service}
    </div>
  )
}

export default ServiceList