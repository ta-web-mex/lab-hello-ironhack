import React from "react";

function App() {
  return (
    <div className="hello">

      <nav className="navbar">
        <img src="../images/ironhack-logo.svg" alt="logo"></img>
        <img src="../images/menu-top.svg" alt="menu"></img>
      </nav>

      <div className="content">
          <h1>Say Hello to ReactJS</h1>
          <p>You will learn a Frontend framework from scratch <br></br> to become a Ninja developer</p>
          <button type="button">Awesome!</button>
      </div>

      <footer>
          <div>
            <img src="../images/icon1.png" alt="1"></img>
            <p>React make ir painless to create <br></br> interactive UIs.</p>
          </div>
          <div>
            <img src="../images/icon2.png" alt="2"></img>
            <p>Build encapsulated component that <br></br>manage their state.</p>  
          </div>
          <div>
            <img src="../images/icon3.png" alt="3"></img>
            <p>A set of immutable values are passed to <br></br>the components.</p>   
          </div>
          <div>
            <img src="../images/icon4.png" alt="4"></img>
            <p>Statically-typed designed to run on<br></br> modern browsers.</p>   
          </div>
      </footer>  

    </div>
  );
}

export default App;