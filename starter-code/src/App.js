import React, { Component } from "react";
import './App.css'
class App extends Component {
  render() {
    return (
      <div>
          <nav>
      <img src="./images/ironhack-logo.svg" alt="logoironhack"/>
      <img src="./images/menu-top.svg" alt="menu"/>
  </nav>
  <div className= "main">
      <h1>Say Hello To ReactJS</h1>
      <br/>
      <h4>You will learn a Frontend framework from scratch,<br/>
      to become a Ninja Developer</h4>
        <br/>
        <button>
            Awesome!
        </button>
  </div>
        <div className="icons">
        <div id="declarative">
        <img className="icon" src="./images/icon1.png" alt="Declarative"/>
        <p>React makes it painless to create interactive UIs.</p>
        </div>
        <div id="components">
        <img className="icon" src="./images/icon2.png" alt="Components"/>
        <p>Build encapsulated compoents that manage their state.</p>
        </div>
        <div id= "single-way">
        <img className="icon" src="./images/icon3.png" alt="Single-way"/>
        <p>A set of immutable values are passed to the component's.</p>
        </div>
        <div id="JSX">
        <img className="icon" src="./images/icon4.png" alt="JSX"/>
        <p>Statically-typed designed to run on modern browsers.</p>
        </div>
        </div>
        <br/>
        <br/>
  </div>
    );
  }
}

export default App;