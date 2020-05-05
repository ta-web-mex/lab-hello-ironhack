import React, { Component } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Card from './components/Card'

class App extends Component {
  render() {
    return (
    
      <div className="App">
        <Navbar />

        <div className="header">
           <p>Say hello to ReactJS</p> 
          <h2> You will learn a Frontend framework from scratch, </h2> 
           <h2>to become a Ninja Developer</h2>
          <a href="#">Awesome!</a>
        </div>

        <div className="container">
          <Card
            img="/images/icon1.png"
            description="React makes it painless to create interactive UIs"
          />
          <Card
            img="/images/icon2.png"
            description="Build encapsulated components that manage their state"
          />
          <Card
            img="/images/icon3.png"
            description="A set of immutable values are passed to the components"
          />
          <Card
            img="/images/icon4.png"
            description="Statically-typed designed to run on modern browsers"
          />
        </div>
      </div>
    )
  }
}

export default App
