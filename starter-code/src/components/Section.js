import React, {Fragment} from 'react'

const Section = ({text, imageURL})=>{
    return (
        <div>
            <img src={imageURL}/>
            <p>{text}</p>
        </div>
    )
}

export default Section