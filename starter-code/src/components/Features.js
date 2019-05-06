import React, { Component } from 'react';

import './Features.css';

class Features extends Component {
  render() {
    return (
      <section className="Features">
        <figure>
          <img src="/images/icon1.png" />
          <figcaption>React makes it painless to create interactive UIs.</figcaption>
        </figure>
        <figure>
          <img src="/images/icon2.png" />
          <figcaption>Build encapsulated component that manage their state.</figcaption>
        </figure>
        <figure>
          <img src="/images/icon3.png" />
          <figcaption>A set of immutable values are passed to the components.</figcaption>
        </figure>
        <figure>
          <img src="/images/icon4.png" />
          <figcaption>Statically-typed designed to run on modern browsers.</figcaption>
        </figure>
      </section>
    );
  }
}

export default Features;
