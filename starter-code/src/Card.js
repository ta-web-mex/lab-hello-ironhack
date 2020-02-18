import React from 'react'

function Card({image, cardText}) {
    return(
        <div className="card">
            <img src={image}/>
            <p>{cardText}</p>
        </div>
    )
}

export default Card