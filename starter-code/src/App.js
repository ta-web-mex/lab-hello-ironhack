import React, { Component } from "react";
import "./App.css";

class App extends Component {
  render() {
    const formatName = user => {
      return `${user.firstName} ${user.lastName}`;
    };

    const user = {
      firstName: "Harper",
      lastName: "Perez",
      avatarUrl: ""
    };

    const element = <h2>Hello, {formatName(user)}!</h2>;

    const img = {
      first: [<img src="../images/icon1.png" />, <p>React makes it painless to create interactive UIs</p>],
      second: [<img src="../images/icon2.png" />, <p>Build encapsulated component that manage their state</p>],
      third: [<img src="../images/icon3.png" />, <p>A set of inmutable values are passed to the components</p>],
      fourth: [<img src="../images/icon4.png" />, <p>Stetically-typed designed to run on modern browsers</p>]
    };

    const nav = {
      left: <img src="../images/ironhack-logo.svg" />,
      right: <img src="../images/menu-top.svg" />
    };

    const displayAvartar = user => {
      if (user.avatarUrl) {
        return <img src={user.avatarUrl} />;
      } else {
        return (
          <img
            src="https://s3.amazonaws.com/owler-image/logo/ironhack_owler_20180828_221413_original.png"
            width="300"
            height="300"
          />
        );
      }
    };

    return (
      <div className="App">
        <nav className="logos">
          {" "}
          {nav.left} {nav.right}{" "}
        
       
        </nav>
        <div className="texto">
            <h1> Say hello to ReactJS </h1>
            <span><h3>You will learn a Frontend framework from scratch,</h3>
            <h3>to become a Ninja Developer</h3></span>
            <button className="boton">Awesome!</button>
        </div>
        <footer>
          <div>
            {img.first[0]}
            <br />
            <p>{img.first[1]}</p>
          </div>
          <div>
            {img.second[0]}
            <br />
            <p>{img.second[1]}</p>
          </div>
          <div>
            {img.third[0]}
            <br />
            <p>{img.third[1]}</p>
          </div>
          <div>
            {img.fourth[0]}
            <br />
            <p>{img.fourth[1]}</p>
          </div>
        </footer>
      </div>
    );
  }
}

export default App;
