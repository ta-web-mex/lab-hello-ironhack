import React, { Component } from "react";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
      <nav>
      <div><img src="images/ironhack-logo.svg" /></div>
      <div><img src="/images/menu-top.svg" /></div>
      </nav>
      <section>
      <h1> Say hello to ReactJS</h1>
        <p>You will learn a Frontend framework from scratch, become a Ninja Developer</p>


      </section>

      <footer>
      <div><img src="/images/icon1.png"/><br/>
      <p>React makes it painles to create interactiveUIs.</p></div>
      <div><img src="/images/icon2.png"/><br/><p>Build encapsulated component thath manage their state.</p> </div>
      <div><img src="/images/icon3.png"/><br/> <p> A set of immutable values are passed to the components.</p> </div>
      <div> <img src="/images/icon4.png"/> <br/> <p>Satically-typed designed to run on modern browsers,</p> </div>

      </footer>
      </div>
    );
  }
}

export default App;
