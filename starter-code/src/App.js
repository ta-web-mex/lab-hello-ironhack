import React, { Component } from "react";
import "./App.css";
import Card from "./components/Card"
import Intro from "./components/Intro"


class App extends Component {
  render() {
    return (
      <div className="App">
        <nav>
    <img src="/images/ironhack-logo.svg"alt="logo" />
    <img src="/images/menu-top.svg" alt="menu" />
    </nav>


        <Intro />
        <div className="footer">
        <Card 
        image="/images/icon1.png"
        description="React makes it painless to create interactive UIs."/>
        <Card 
        image="/images/icon2.png"
        description="Build encapsulated component that manage their state."/>
        <Card 
        image="/images/icon3.png"
        description="A set of inmutable values are passed to the components."/>
        <Card 
        image="/images/icon4.png"
        description="Statically-typed designed to run on modern browsers."/>
        </div>
     
      </div>
    );
  }
}

export default App;