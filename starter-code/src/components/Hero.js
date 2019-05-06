import React, { Component } from 'react';

import './Hero.css';

class Hero extends Component {
  render() {
    return (
      <section className="Hero">
        <h1>Say hello to ReactJS</h1>
        <p>You will learn a UI library from scratch, to become a Ninja Developer</p>
        <p>
          <button>Awesome!</button>
        </p>
      </section>
    );
  }
}

export default Hero;
