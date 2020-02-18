import React from "react";

const Section = ({img, text}) => {
    return(
        <div className='section'>
        <img src={img} />
         <p>{text}</p>
        </div>
    )
}

export default Section