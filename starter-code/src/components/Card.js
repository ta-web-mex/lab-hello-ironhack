import React from 'react'

const Card = ({image, description}) => {
    return (
        <div className="Card">
            <article>
                <img src={image}/>
                <p>{description}</p>

            </article>

        </div>
    )
}
 export default Card