 import React from 'react'
import propTypes from 'prop-types'


//React Functional Component

const Card = ({ image, description }) => {

    return (
        <div className="card">
            <img src={image} alt="{name}" />
            <p> {description} </p>
        </div>
    )
}

Card.propTypes = {
    image: propTypes.string,
    description: propTypes.string
}



export default Card