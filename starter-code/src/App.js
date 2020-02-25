import React, { Component } from "react";
import "./App.css";

export class App extends Component {
  render() {
    const element = (
      <nav className="d-flex justify-content-between">
        <img src="images/ironhack-logo.svg" alt="logo-ironhack" />
        <div id="menu">
          <div className="menu1"></div>
          <div className="menu2"></div>
        </div>
      </nav>
    );
    return (
      <div className="App">
        {element}
        <h1 className="d-flex justify-content-center">
          <b>Say hello to ReactJS</b>
        </h1>
        <div className="d-flex justify-content-center">
          <h2 class="d-flex align-items-center">
            We will learn a Frontend framework from scratch, to become a ninja
            developer
          </h2>
        </div>
        <div class="d-flex justify-content-center button">
          <button className="btn btn-light"> Awesome!</button>
        </div>

        <div className="d-flex flex-row bd-highlight mb-3">
          <div>
            <img src="images/icon1.png" />
            <p>React makes it painless to creat interactive UIs.</p>
          </div>
          <div>
            <img src="images/icon2.png" />
            <p>Build encapsulate component that manage their state.</p>
          </div>
          <div>
            <img src="images/icon3.png" />
            <p>A set of inmutable values are passed to the components.</p>
          </div>
          <div>
            <img src="images/icon4.png" />
            <p>Statically-typed design to run on moderns browsers.</p>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
