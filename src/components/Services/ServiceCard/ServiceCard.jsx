import React from 'react'
import './ServiceCard.css'
import { EDUCATION } from '../data'

const ServiceCard = ({details}) => {

  return (
  <div className="education-card">
      <div className='work-experience-card'>
        <h6>{details.title}</h6>
        <h6>{details.collegeName}</h6>
        <div className="work-duration">{details.date}</div>
        <br />
        {details.percentage && (
       
          <div className="work-duration">{details.percentage}</div>
       
      )}
        <ul>
            {details.responsibilities.map((item) => (
                <li key={item}><span className='list-hash'>#</span> {item}</li>
            ))}
        </ul>
    </div>
  </div>
  )
}

export default ServiceCard