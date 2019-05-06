import React, { Component } from 'react';

import './Nav.css';

class Nav extends Component {
  render() {
    return (
      <nav className="Nav">
        <img src="/images/ironhack-logo.svg" />
        <img src="/images/menu-top.svg" />
      </nav>
    );
  }
}

export default Nav;
