import React, { Component } from "react";
import   "./App.css";


class App extends Component {

  render() {
   
    
    const element = (
      <div>
      <nav>
        <img src="./images/ironhack-logo.svg" alt=""/>
        <img src="./images/menu-top.svg" alt=""/>
      </nav>
      <section class="section1">
      <h1>Say hello to ReactJS</h1>
      <h3>You will learn a frontend framework from scratch, <br/>to become a developer ninja</h3>
      <button class="header-button">Awesome!</button>
      
      </section>

      <section class="section2">
      <div class= "component">
        <img src="./images/icon1.png" alt=""/>
        <p>React makes it painless to create <br/>interactive UIs.</p>
      </div>
      <div class= "component">
        <img src="./images/icon2.png" alt=""/>
        <p>Build encapsulated component that <br/>manage their state.</p></div>
      <div class= "component">
        <img src="./images/icon3.png" alt=""/>
        <p>A set of immutable values are passed to <br/>the components</p>
      </div>
      <div class= "component">
        <img src="./images/icon4.png" alt=""/>
        <p>Statically-typed designed to run on <br/>modern browsers</p>
      </div>
        
    

      </section>
      </div>

      
    )
 
    return (
      <div className="App">
        {element}
      </div>
    );
  }
}
export default App