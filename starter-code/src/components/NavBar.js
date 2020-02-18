import React from 'react'
const NavBar = ({imglogo,imgHambur})=>{
	return (
		<nav>
			<ul>
				<li><img src={imglogo} className="navBarLogo"/></li>
				<li><img src={imgHambur} className="navBarHambur"/></li>
			</ul>
		</nav>

		)
}

export default Navbar