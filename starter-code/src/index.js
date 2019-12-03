import React from "react";
import ReactDOM from "react-dom";
import NavbarComp from "./components/NavbarComp";
import LandingComp from "./components/LandingComp";
import FooterComp from "./components/FooterComp";
import "../index.css"

class Cuerpo extends React.Component {
    render() {
      return (
        <div className="main-wrapper">
          <NavbarComp />
          <LandingComp />
          <FooterComp />
        </div>
      );
    }
  }


  ReactDOM.render(<Cuerpo />, document.getElementById("root"));

