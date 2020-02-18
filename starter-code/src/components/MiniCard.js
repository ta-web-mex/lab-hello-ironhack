import React from 'react'
const MiniCard = ({description,img})=>{
	return(
		<div className='miniCard'>
		<img src={img} />
		<p>{description}</p>
		</div>
		)
}



export default MiniCard