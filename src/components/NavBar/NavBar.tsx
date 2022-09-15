import "./NavBar.css";
import React from "react";
import Skull from "../../assets/skull.png";

const NavBar = () => {
  return (
    <div className="nav-container">
      <h1 className="title">Mood</h1>
      <img className="skull" src={Skull} />
      <h1 className="title">Tunes</h1>
    </div>
  );
};

export default NavBar;
