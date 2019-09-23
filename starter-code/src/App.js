import React, { Component } from "react";
import "./App.css";
// Se pueden importar todas las imágenes de jalón o tiene que ser una por una?
/* import ironhackLogo from "../public/images/ironhack-logo.svg"
import menuTop from "../public/images/menu-top.svg"
import reactLogo from "../public/images/react-logo.svg" */


class App extends Component {
    render(){
        return(
            <div className="App" >
                <section>
                    <nav>
                        <img src="/images/ironhack-logo.svg" alt="ironhack_logo"/>
                        <img src="/images/menu-top.svg" alt="menu"/>
                    </nav>
                </section>
                <section className="hero">
                    <div>
                        <h1>Say hello to ReactJS</h1>
                    </div>
                    <div>
                        <p>You will lern a Frontend framework from scratch,<br/> to become a Ninja Developer</p>
                    </div>
                    <div>
                        <button>Awesome!</button>
                    </div>
                </section>

                <section className="icons">
                    <div>
                        <img src="/images/icon1.png" alt="" className="src"/>
                        <p>React makes it painless to create interactive UIs.</p>
                    </div>
                    <div>
                        <img src="/images/icon2.png" alt="" className="src"/>
                        <p>Build encapsulated component that manage their state.</p>
                    </div>
                    <div>
                        <img src="/images/icon3.png" alt="" className="src"/>
                        <p>A set of immutable values are passed to the components.</p>
                    </div>
                    <div>
                        <img src="/images/icon4.png" alt="" className="src"/>
                        <p>Statically-typed designed to run on modern browsers.</p>
                    </div>
                </section>
            </div>
        )
    }
}

export default App;