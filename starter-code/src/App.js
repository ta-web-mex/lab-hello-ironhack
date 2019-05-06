import React, {Component} from 'react'

import './App.css'

export class App extends Component{
  render () {
  
    const navbar =(
      <nav className="navBar">
        <div><img src="images/ironhack-logo.svg"/></div>
        <div><img src = "images/menu-top.svg"/></div>
      </nav>
    )
     
    const cover =(
      <div className="cover">
        <h1>Say hello to ReactJS</h1>
        <h3>You will learn a Fronted framework from scratch, <br/> to become a ninja Developer</h3>
        <button>Awesome!</button>
      </div>
    )
    const cards = (
      <div className="cards">
        <div className="card"> <img src="images/icon1.png"/><p>React makes it painless to create interactive UIs</p></div>
        <div className="card"> <img src="images/icon2.png"/> <p>Build encapsulated component that manage their state</p> </div>
        <div className="card"> <img src="images/icon3.png"/> <p> A set of inmutable values are passed to the commponents</p> </div>
        <div className="card"><img src="images/icon4.png"/> <p>Statically- typed designed to run on modern browsers</p> </div>
      </div>
    )
    return (
      <div>
      {navbar}
      {cover}
      {cards}
      </div>
    )
  }


}


export default App 