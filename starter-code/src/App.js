import React, { Component } from 'react';

import Nav from './components/Nav';
import Hero from './components/Hero';
import Features from './components/Features';

class App extends Component {
  render() {
    return (
      <div>
        <Nav />
        <Hero />
        <Features />
      </div>
    );
  }
}

export default App;
