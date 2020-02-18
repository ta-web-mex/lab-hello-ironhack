import React from 'react'

const Card=({image,description})=>{
    return(
        <div className="Card">
            <img src={image}/>
            <p>{description}</p>
        </div>
    )
}

export default Card