import React from "react";
import { render } from "react-dom";
import "./style.css";
import IndexComp from "./components/IndexComp";
import NavBar from "./components/navComp";
import FooterComp from "./components/footerComp";

class RenderizeMe extends React.Component {
  render() {
    return (
      <div className="main-wrapper">
        <NavBar />
        <IndexComp />
        <FooterComp />
      </div>
    );
  }
}

render(<RenderizeMe />, document.querySelector("#root"));
