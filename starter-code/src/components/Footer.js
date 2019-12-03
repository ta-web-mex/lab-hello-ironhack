import React from 'react';

function Footer() {
    return (
        <div id="image-container">
            <div className="card">
                <img src="/images/icon1.png" alt="" id=""></img>
                <div className="card-content">
                    <p>React makes it painless to create interactive UIs.</p>
                </div>
            </div>
            <div className="card">
                <img src="/images/icon2.png" alt="" id=""></img>
                <div className="card-content">
                    <p>Build encapsulated component that manage their state.</p>
                </div>
            </div>
            <div className="card">
                <img src="/images/icon3.png" alt="" id=""></img>
                <div className="card-content">
                    <p>A set of immutable values are passed to the components.</p>
                </div>
            </div>
            <div className="card">
                <img src="/images/icon4.png" alt="" id=""></img>
                <div className="card-content">
                    <p>Statically-typed designed to run on modern browsers.</p>
                </div>
            </div>
        </div>
    )
}


export default Footer;