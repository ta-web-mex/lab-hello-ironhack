import React, { Component } from 'react'
import './App.css'


class App extends Component {
  render() {
    return (
      <div className="homePage">
        <div className="navBar">
           <div className="navBar-item1"><img src="images/ironhack-logo.svg" width="45" /></div>
           <div className="navBar-item2"><img src="images/menu-top.svg" /></div>
        </div>
        <div className="main-container">
          <h1> Say hello to ReactJS</h1>
          <h3>You will learn a Frontend framework from scratch, to become a Ninja Developer</h3>
          <button>Awesome!</button>
        </div>
        <div className="container">
          <div className="container-item">
            <img src="images/icon1.png"/>
            <p>React makes it painless to create interactive UIs.</p>
          </div>
          <div className="container-item">
            <img src="images/icon2.png"/>
            <p>Build encapsulated component that manage their state.</p>
          </div>
          <div className="container-item">
            <img src="images/icon3.png"/>
            <p>A set of inmutable values are passed to the components.</p>
          </div>
          <div className="container-item">
            <img src="images/icon4.png"/>
            <p>Statically-typed designed to run on modern browsers.</p>
          </div>
        </div>

      </div>
    )
  }
}

export default App