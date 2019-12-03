import React, { Component } from "react";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1> Say hello to ReactJS </h1>
        <p className="p">You will learn a Fronted framework from scratch,to become a Ninja Developer</p>
        <button className="Button">Awesome!</button>
        <div className="imagenes">
        <img src="../images/icon1.png" alt="imagen"></img>
        <img src="../images/icon2.png" alt="imagen2"></img>
        <img src="../images/icon3.png" alt="imagen3"></img>
        <img src="../images/icon4.png" alt="imagen4"></img>
        </div>
        <div className="textos">
            <p>React makes it painlessto create interactive Uls.</p>
            <p>Build encapsulated component that manage their state.</p>
            <p>A set of immutable values are passed to thecomponents.</p>
            <p>Statically-typed designed to run on modern browsers.
            </p>

        </div>
      </div>
   
    );
  }
}
export default App;