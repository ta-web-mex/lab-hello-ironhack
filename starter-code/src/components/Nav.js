import React from 'react'


const Nav = ({img1,img2})=>{
	return(
		<nav className="Navbar">
		<ul><li> <img src={img1}/></li>
			<li><img src={img2}/></li>
		</ul>
		</nav>
		)

}


export default Nav