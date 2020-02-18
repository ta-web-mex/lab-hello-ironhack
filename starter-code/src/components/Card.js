 
import React from 'react'

// React functional component
const Card = ({ image, description }) => {
  return (
    <div className="card">
      <img src={image} alt={name} />
      <p>{description}</p>
    </div>
  )
}


export default Card