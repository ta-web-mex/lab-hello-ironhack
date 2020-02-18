import React from 'react'
import propTypes from 'prop-types'

// React functional component
const Card = ({ image, description }) => {
  return (
    <article className="card">
      <img src={image} alt="img" />
      <p>{description}</p>
    </article>
  )
}

Card.proptypes = {
  image: propTypes.string,
  description: propTypes.string
}

export default Card
