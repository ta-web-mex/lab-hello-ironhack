import React, { Component } from "react";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="background">
        <nav>
          <div>
            <img src="/images/ironhack-logo.svg" alt="Ironhack" />
          </div>
          <div>
            <img src="/images/menu-top.svg" alt="menu" />
          </div>
        </nav>
        <section className="main">
          <h2>Say hello to ReactJS</h2>
          <p>
            You will learn a Frontend framework from scratch, <br />
            to become a Ninja Developer
          </p>
          <button>Awesome!</button>
        </section>
        <section className="items">
          <figure>
            <img src="/images/icon1.png" alt="Tool" />
            <p>
              React makes it painless to create <br />
              interactive UIs.
            </p>
          </figure>
          <figure>
            <img src="/images/icon2.png" alt="Tool" />
            <p>
              Build encapsulated component that <br />
              manages their state.
            </p>
          </figure>
          <figure>
            <img src="/images/icon3.png" alt="Tool" />
            <p>
              A set of inmutable values are passed to <br />
              the component.
            </p>
          </figure>
          <figure>
            <img src="/images/icon4.png" alt="Tool" />
            <p>
              Statically-typed design to run on <br />
              modern browsers.
            </p>
          </figure>
        </section>
      </div>
    );
  }
}

export default App;
