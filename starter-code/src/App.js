import React from 'react'
import './App.css'
function App() {
  return (
    <div className="App">
      <div className="image">
        <header className>
          <img src="../images/ironhack-logo.svg" alt="" />
          <img src="../images/menu-top.svg" alt="" />
        </header>
        <section>
          <h1>Say hello to ReactJS</h1>
          <p>
            You will learn a Frontend framework from scratch,
            <br /> to become a Ninja Developer
          </p>
          <button>Awesome!</button>
        </section>
      </div>
      <div className="footer">
        <div>
          <img src="../images/icon1.png" alt="" />
          <p>React makes it painless to create interactive UIs.</p>
        </div>
        <div>
          <img src="../images/icon2.png" alt="" />
          <p>Build encapsulated component that manage their state.</p>
        </div>
        <div>
          <img src="../images/icon3.png" alt="" />
          <p>A set of immutable values are passed to the component0s.</p>
        </div>
        <div>
          <img src="../images/icon4.png" alt="" />
          <p>Statically-typed designed to run on modern browsers.</p>
        </div>
      </div>
    </div>
  )
}
export default App
