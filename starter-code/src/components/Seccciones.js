import React from 'react'

const Secciones = ({image, texto}) =>{
    return(
        <div className='miniseccion'
            style={{
                width:'20vw',
                display: 'flex',
                flexDirection: "row",
                flexWrap: 'wrap',
            }}
        >
            <img src={image} />
            <p>{texto}</p>
        </div>
    )
}

export default Secciones 