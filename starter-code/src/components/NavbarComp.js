import React from "react";

function NavbarComp(props) {
  return (
    <div className="navbar">
        <div className="logo">
          <img src="./images/ironhack-logo.svg" alt="Ironhack"></img>
        </div>
        <div className= "hamburguesa">
        <img src="./images/menu-top.svg" alt="burguer"></img>
        </div>
    </div>
  );
}

export default NavbarComp;