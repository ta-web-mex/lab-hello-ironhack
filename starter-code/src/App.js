import React, {Component} from 'react' 
  import './App.css'

class App extends Component{
  render (){
    return(
      <div className='App'>
        <nav>
          <img src="images/ironhack-logo.svg" alt="Ironhack"/>
          <img src="images/menu-top.svg" alt="Menu"/>
        </nav>
        <section id="main">
          <h1>Say Hello to ReactJS</h1>
          <h3>You will learn a Frontend framework from scratch,<br/> to become a Ninja Developer.</h3>
          <button>Awesome</button>
        <aside>
          <article><img src="images/icon1.png"/><h4>React makes it painless to create interactive UIs.</h4></article>
          <article><img src="images/icon2.png"/><h4>Build encapsulated component thar manage their state.</h4></article>
          <article><img src="images/icon3.png"/><h4>A set of inmutable values are passed to the components.</h4></article>
          <article><img src="images/icon4.png"/><h4>Statically-typed designed to run on modrn browsers.</h4></article>
        </aside>
        </section> 
      </div>
    )
  }
}
export default App
