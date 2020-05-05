import React, { Component } from 'react'
import './App.css'
import Card from './components/Card'
import NavBar from './components/NavBar'
import Header from './components/Header'

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Header />
        <div className="img-container">
          <Card
            img="/images/icon1.png"
            description="React makes it painless to create interactive UIs"
          />
          <Card
            img="/images/icon2.png"
            description="Build encapsulated component that manage their state"
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
