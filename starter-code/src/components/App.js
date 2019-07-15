import React from 'react'

function App() {
  return (
    <div>
      <nav>
        <img src="../images/ironhack-logo.svg" alt = "logo"/>
        <img src="../images/menu-top.svg" alt = "menu"/>
      </nav>
      <main>
        <h1>Say hello to ReactJS</h1>
        <h3>You will learn a Frontend framework from scratch, to become a Ninja Developer</h3>
        <button>Awesome!</button>
      </main>
      <footer>
        <div>
          <img className="image" src='../images/icon1.png'/>
          <p>React make it painless to create interactive UIs.</p>
        </div>
        <div>
          <img className="image" src='../images/icon2.png'/>
          <p>BUild encapsulated component that manage their state.</p>
        </div>        
        <div>
          <img className="image" src='../images/icon3.png'/>
          <p> A set of immutable values are passed to the components.</p>
        </div>        
        <div>
          <img className="image" src='../images/icon4.png'/>
          <p>Statically-typed designed to run on modern browsers.</p>
        </div>
      </footer>
    </div>
  )
}

export default App