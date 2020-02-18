import React, { Component } from 'react'
import Card from './components/Card'

// React class component
class App extends Component {
  render() {
    return (
        <div className="App">
            <nav className ="Navbar">
                <a className="pad-img ">  <img src="/images/ironhack-logo.svg"  /> </a>
                <a className="pad-img2 ">  <img src="/images/menu-top.svg"  /> </a>
               
            </nav>
<div className="Top-e">
            <div className="Encabezado">
                <h1>Say hello to ReactJS</h1>
                <p>You will learn a Frontend Framework from scratch, </p>
                <p>to become a Ninja Developer</p>
                <br></br>

                <button>Awesome</button>
            </div>

</div>
            <section className="Container">
              <div>
                <div className="Cards">
                    <Card 
                        description ="React makes it painless to create interactive UIs" 
                        image="/images/icon1.png"
                    />
                      <Card 
                        description ="Build encapsulated component that manage their state" 
                        image="/images/icon2.png"
                    />
                      <Card 
                        description ="A set of immutable values are passed to the components" 
                        image="/images/icon3.png"
                    />
                      <Card 
                        description ="Statically-typed designed to run on modern browsers" 
                        image="/images/icon4.png"
                    />


                </div>
</div>
            </section>
        </div>
    )
  }
}

// module.exports = App
export default App