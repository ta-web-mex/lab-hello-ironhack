import React, { Component } from "react";
import "./App.css";

class App extends Component {
  render() {
    return (
        <main className="App">
        <nav>
        <img src="/images/ironhack-logo.svg" alt="" />
        <img src="/images/menu-top.svg" alt="" />
        </nav>
        <div>
        <h1> Say hello to ReactJS </h1>
        <h4>You will learn a Forntend framework form scratch, to become a Ninja Developer</h4>
        </div>
        <button>
        <a>Awesome!</a>
        </button>
        <section className="cards"> 
        <div>
        <img src="/images/icon1.png" alt="" />
        <p>React markes it painless to create interactive UIs.</p>
        </div>
  
        <div>
        <img src="/images/icon2.png" alt="" />
        <p>Build encapsulated component that manage their state.</p>
        </div>
        <div>
        <img src="/images/icon3.png" alt="" />
       
        <p>A set f immutable values are passed to the components.</p>
        </div>
        <div>
        <img src="/images/icon4.png" alt="" />
        
        <p>Statically-typed designed to run on modern browsers.</p>
        </div>
        </section>
        

      </main>
          );
  }
}

export default App;