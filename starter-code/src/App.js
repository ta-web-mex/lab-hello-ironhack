import React, { Component } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Info from './components/Info'
import Feature from './components/Feature'

class App extends Component {
  render() {
    return (
      <div id="App">
        <Navbar />

        <Info />
        <div className="features">
          <Feature
            img="./images/icon1.png"
            info="React makes it painless to create interactive UIs"
          />

          <Feature
            img="./images/icon2.png"
            info="Build encapsulated component that manage their state"
          />

          <Feature
            img="./images/icon3.png"
            info="A set of immutable values are passed to the components"
          />

          <Feature
            img="./images/icon4.png"
            info="Statically-typed designed to run on modern browsers"
          />
        </div>
      </div>
    )
  }
}

export default App
