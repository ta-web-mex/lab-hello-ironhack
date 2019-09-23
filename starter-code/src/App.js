import React, {Component} from 'react';
import './App.css';

const navBar = {
  logo: 'images/ironhack-logo.svg',
  menu: 'images/menu-top.svg'
};

const bodyInfo = (
  <div className="col-12 text">
    <h1 className="text">Say hello to React JS</h1>
    <h3 className="text">You will learn a Frontend framework from scratch, to become a Ninja Developer </h3>
  </div>
);

const footerImages = {
  icon1: 'images/icon1.png',
  icon2: 'images/icon2.png',
  icon3: 'images/icon3.png',
  icon4: 'images/icon4.png'
};

class App extends Component {
  render() {
    return (
      <div className="body">
        <nav>
          <img className="navImgLogo" src={navBar.logo}></img>
          <img className="navImgMenu" src={navBar.menu}></img>
        </nav>
        <header>
          {bodyInfo}
          <button type="button" className="btn btn-light btn-lg">
            Awesome!
          </button>
        </header>
        <section>
          <div className="card-deck px-5">
            <div className="card">
              <img src={footerImages.icon1} className="img-footer" />
              <p>React makes it painless to create interactive UIs</p>
            </div>
            <div className="card">
              <img src={footerImages.icon2} className="img-footer" />
              <p>Build encapsulated component that manage their state</p>
            </div>
            <div className="card">
              <img src={footerImages.icon3} className="img-footer" />
              <p>A set of inmutable values are passed to the componets.</p>
            </div>
            <div className="card">
              <img src={footerImages.icon4} className="img-footer" />
              <p>Statically-typed designed to run on modern browsers</p>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default App;
