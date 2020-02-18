import React, { Component } from 'react'
import MiniCard from './components/MiniCard'
import NavBar from './components/NavBar'

class App extends Component{
	render(){
		return (
			<div className="generalContainer">
				<NavBar imglogo="/images/ironhack-logo.svg"
						imgHambur="/images/menu-top.svg"/>

				<div className="allCards">
					<MiniCard  img="/images/icon1.png"
							   description ="React makes it painless to create interactive UIs"
					 />
					 <MiniCard  img="/images/icon2.png"
							   description ="Build encapsulated component that manage their state."
					 />
					 <MiniCard  img="/images/icon3.png"
							   description ="A set of immutable values are passed to cpmponents"
					 />
					<MiniCard  img="/images/icon4.png"
							   description ="Statically-typed designed to run on modern browsers."
					 />
				</div>

			</div>
			)
	}
}

export default App