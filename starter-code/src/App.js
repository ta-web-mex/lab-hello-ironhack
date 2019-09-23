import React, { Component } from 'react'
import './App.css'

class App extends Component {
  //lo que pinta todo en la vida del html
  render() {
    return (
      <div className="App">
        <nav>
          <img src="/images/ironhack-logo.svg" alt="" />
          <img src="/images/menu-top.svg" alt="" />
        </nav>
        <div class="title">
          <h1 class="Title"> Say hello to ReactJS</h1>
        </div>
        <div class="subtitle">
          <h2>You will learn a Frontend framework form scratch, to become a Ninja Developer</h2>
        </div>
        <div class="button-container">
          <button>Awesome!</button>
        </div>
        <div class="container">
          <div>
            {' '}
            <img src="/images/icon1.png" />
            <div>React make it painless to create interactive UIs</div>
          </div>
          <div>
            {' '}
            <img src="/images/icon2.png" />
            <div>Build encapsulated component that manage their state.</div>
          </div>
          <div>
            {' '}
            <img src="/images/icon3.png" />
            <div>A set of immutable values are passed to the components</div>
          </div>
          <div>
            {' '}
            <img src="/images/icon4.png" />
            <div>Statically-typed designed to run on modern browsers</div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
