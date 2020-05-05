import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Section from "./components/Section";
import Card from "./components/Card";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Section />
        <div className="Imagenes">
        <Card
          img="/images/icon1.png"
          text="React makes it painless to create interactive Uls."
        />
        <Card
          img="/images/icon2.png"
          text="Build encapsulated component that manage their site."
        />
        <Card
          img="/images/icon3.png"
          text="A set of immutable values are passed to the components."
        />
        <Card
          img="/images/icon4.png"
          text="Statically-typed designed to run on modern browsers."
        />
        </div>
      </div>
    );
  }
}

export default App;