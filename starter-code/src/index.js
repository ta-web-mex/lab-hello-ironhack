import React from 'react'
import { render } from 'react-dom'
import '../public/style.css'

function App() {
  return (
    <div style={{ width: '100vw', backgroundImage: "url('./images/react-logo.svg')" }}>
      <header
        style={{
          display: 'flex',
          justifyContent: 'space-between'
        }}
      >
        <img
          style={{
            width: '50px',
            paddingRight: '10px'
          }}
          src="./images/ironhack-logo.svg"
          alt="logo"
        />
        <img
          style={{
            width: '50px',
            paddingLeft: '10px'
          }}
          src="./images/menu-top.svg"
          alt="logo"
        />
      </header>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          color: 'white'
        }}
      >
        <h1
          style={{
            width: '100vw',
            fontSize: '100px',
            marginBottom: '100px'
          }}
        >
          Say hello to reactJS
        </h1>
        <h2
          style={{
            width: '50vw',
            marginBottom: '100px'
          }}
        >
          You will learn a frontend faramework from scratch, to become a Ninja developer{' '}
        </h2>
        <button style={{ width: '100px' }}>Awesome</button>
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-around', color: 'white', textAlign: 'center' }}>
        <div>
          <img style={{ width: '80px' }} src="./images/icon1.png" alt="" />
          <p>React makes it painles to create interactive UIs </p>
        </div>
        <div>
          <img style={{ width: '80px' }} src="./images/icon2.png" alt="" />
          <p>Build encapsulated component that manage thier state</p>
        </div>
        <div>
          <img style={{ width: '80px' }} src="./images/icon3.png" alt="" />
          <p>A set of immutable values are passed to the components</p>
        </div>
        <div>
          <img style={{ width: '80px' }} src="./images/icon4.png" alt="" />
          <p>Statically-typed desgined to run on modern browsers</p>
        </div>
      </div>
    </div>
  )
}
render(<App />, document.querySelector('#root'))
