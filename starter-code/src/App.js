import React, { Component } from "react"
import "./App.css"


class App extends Component {
  render() {
    return (
      <div className="App">
        <nav>
          <img src="/images/ironhack-logo.svg" />
          <img src="/images/menu-top.svg" />
        </nav>
        <main>
          <h1>Say Hello to ReactJS</h1>
          <p>You will learn a Frontend framework from scratch,<br />to become a Ninja Developer</p>
          <button>Awesome!</button>
          <div id="icons">
            <div id="icon1" className="icon">
              <img src="/images/icon1.png" />
              <p>React makes it painless to create interactive UIs</p>
            </div>
            <div id="icon2" className="icon">
              <img src="/images/icon2.png" />
              <p>Build encapsulated component that manage their state</p>
            </div>
            <div id="icon3" className="icon">
              <img src="/images/icon3.png" />
              <p>A set of immutable values are passed to the components</p>
            </div>
            <div id="icon4" className="icon">
              <img src="/images/icon4.png" />
              <p>Statically-typed designed to run on modern browsers</p>
            </div>
          </div>
        </main>
      </div>
    )
  }
}

export default App