
import React from "react";

function App() {
    return (
        <div>
            <div className="container">
                <div><img src="/images/ironhack-logo.svg" /></div>
                <div><img src="/images/menu-top.svg" /></div>
            </div>
            <div className="head">
                <div><h1>Say hello to ReactJS</h1></div>
                <div className="subtitle"><h2>You will learn a Frontend framework
                    from scratch, to become a Ninja Developer</h2></div>
                <div><button className="btn">Awesome!</button></div>
            </div>
            <div className="footer">
                <div className="card">
                    <img src="/images/icon1.png"/>
                    <p>React makes it painless to create interactive UIs</p>
                </div>
                <div className="card">
                    <img src="/images/icon2.png"/>
                    <p>Build encapsulated component that manage their state</p>
                </div>
                <div className="card">
                    <img src="/images/icon3.png"/>
                    <p>A set of inmutable values are passed to the components</p>
                </div>
                <div className="card">
                    <img src="/images/icon4.png"/>
                    <p>Statically-typed designed to run on modern browsers</p>
                </div>
            </div>
        </div>
    );
}

// module.exports = App
export default App;