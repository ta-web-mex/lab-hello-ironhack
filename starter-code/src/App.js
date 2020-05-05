import React, { Component } from 'react';
import './App.css';
import Card from './components/Card';
class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="NavBar">
          <img src="/images/ironhack-logo.svg" />
          <img src="/images/menu-top.svg" />
        </div>
        <section className="mainContainer">
          <h1>Say hello to ReactJS</h1>
          <h5>
            You will learn a Frontend framework from scratch, <br />
            to become a Ninja Developer
          </h5>
          <a>awesome!</a>
        </section>
        <div className="cards">
          <Card
            image="/images/icon1.png"
            description="React makes it painless to create interactive UIs"
          />
          <Card
            image="/images/icon2.png"
            description="Build encapsulated component that manage their state"
          />
          <Card
            image="/images/icon3.png"
            description="A set of immutable values are passed to the components"
          />
          <Card
            image="/images/icon4.png"
            description="Statically-typed designed to run on modern browsers"
          />
        </div>
      </div>
    );
  }
}
export default App;
