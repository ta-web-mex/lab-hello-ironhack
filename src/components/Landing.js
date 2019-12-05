import React from "react"

function Landing(props) {
    return(
        <div className="Landing">
            <nav>
                <img src="./images/ironhack-logo.svg"/>
                <img src="./images/menu-top.svg"/>
            </nav>
            <div id="message">
                <h2>Say Hello to ReactJS</h2>
                <h3>You will learn a Frontend framework from the scratch, to become a Ninja Developer</h3>
                <button>Awesome!</button>
            </div>
            <section>
                <div className="features">
                    <img src="./images/icon1.png"/>
                    <p>React make it painless to create interactive UIs</p>
                </div>
                <div className="features">
                    <img src="./images/icon2.png"/>
                    <p>Build encapsulated component that manage their state.</p>
                </div>
                <div className="features">
                    <img src="./images/icon3.png"/>
                    <p>A set of immutable values are passed to their components.</p>
                </div>
                <div className="features">
                    <img src="./images/icon4.png"/>
                    <p>Statically-typed designed to run on modern browsers.</p>
                </div>
            </section>
        </div>
    )
};

export default Landing;