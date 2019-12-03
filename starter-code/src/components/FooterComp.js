import React from "react";

function FooterComp(props){
  return (
    <div className="footer">
        <div className="card">
            <img className="img-card" src="./images/icon1.png" alt="icono1"></img>
            <p>React makes it painless to create interactive UIs.</p>
        </div>
        <div className="card">
            <img  className="img-card" src="./images/icon2.png" alt="icono1"></img>
            <p> Buils encapsulated component that manage their state.</p>
        </div>
        <div className="card">
            <img  className="img-card" src="./images/icon3.png" alt="icono1"></img>
            <p>A  set of immutable values are passed to the components.</p>
        </div>
        <div className="card"  >
            <img  className="img-card" src="./images/icon4.png" alt="icono1"></img>
        <p>Statically-typed designed to run on modern browsers</p>
        </div>
    </div>
  );
}

export default FooterComp;