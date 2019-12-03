import React from "react";

function LandingComp(props) {
  return (
  <div className="landing-container">
    <div className="title"> 
      <h1>Say hello to React JS</h1>
    </div>
    <div className="paragraphs"> 
      <p>You will learn a Frontend framework from scratch,
      to become a ninja developer</p>
    </div>
    <div className="button-accept"> 
      <button>Awesome!</button>
    </div>
  </div>
  );
}

export default LandingComp;