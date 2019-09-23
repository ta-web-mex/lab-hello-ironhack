import React, { Component } from "react";
import "./App.css";

class App extends Component {

  render() {

    return (
		<div className="App">
      <div className="Navbar">
        <img src="/images/ironhack-logo.svg" alt=""/>
        <img src="/images/menu-top.svg" alt=""/>
      </div>
      <div className="container">
        <h1>Say Hello to ReactJS</h1>
        <p>You will learn a Frontend framework from scratch, to become a Ninja Developer</p>
    
          <a className="Button" href="#">Awesome!</a>
        
        <ul className="Icons">
          <li>
            <img src="/images/icon1.png" alt=""/>
            <p>React makes it painless to create interactive Uls.</p>
          </li>
          <li>
            <img src="/images/icon2.png" alt=""/>
            <p>Build encapsulated component that manage their state.</p>
          </li>
          <li>
            <img src="/images/icon3.png" alt=""/>
            <p>A set of immutable values are passed to the components.</p>
          </li>
          <li>
            <img src="/images/icon4.png" alt=""/>
            <p>Statically-typed designed to run on modern browsers.</p>
          </li>

        </ul>
      </div>
		</div>
	 );
  }
}

export default App;