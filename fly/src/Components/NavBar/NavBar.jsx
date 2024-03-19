import React, { useState } from "react";
import { SiConsul } from "react-icons/si";
import { BsPhoneVibrate } from "react-icons/bs";
import { AiOutlineGlobal } from "react-icons/ai";
import logo from "../../asseats/img/logo.png";
import { TiThMenu } from "react-icons/ti";

function Header() {
  const [active, setActive] = useState("NavBarMenu");

  const showNavbar = () => {
    setActive("NavBarMenu showNavbar");
  };

  const removeNavbar = () => {
    setActive("NavBarMenu");
  };

  //Second navBar Colar adding

  const [noBg, addBg] = useState("navBarTwo");
  const adBgColor = () => {
    if (window.scrollY >= 10) {
      addBg("navBarTwo navbar_with_bg");
    } else {
      addBg('navBarTwo')
    }
    
  }
  window.addEventListener('scroll',adBgColor)

  return (
    <div className="navBar flex">
      <div className="NavBarOne flex">
        <div>
          <SiConsul className="icon" />
        </div>
        <div className="flex none">
          <li className="flex">
            <BsPhoneVibrate className="icon" />
            Support
          </li>
          <li className="flex">
            <AiOutlineGlobal className="icon" />
            Language
          </li>
        </div>
        <div className="atb flex">
          <span>Sign In</span>
          <span>Sign Out</span>
        </div>
      </div>

      <div className={noBg}>
        <div className="logoDiv">
          <img src={logo} className="logo" alt="Logo" />
        </div>
        <div className={active}>
          <ul className="menu flex">
            <li key="home" onClick={removeNavbar} className="listItem">
              Home
            </li>
            <li key="about" onClick={removeNavbar} className="listItem">
              About
            </li>
            <li key="offer" onClick={removeNavbar} className="listItem">
              Offer
            </li>
            <li key="seats" onClick={removeNavbar} className="listItem">
              Seats
            </li>
            <li key="destination" onClick={removeNavbar} className="listItem">
              Destination
            </li>
          </ul>
          <button onClick={removeNavbar} className="btn flex btnOne">
            Contact
          </button>
        </div>
        <button className="btn flex btnTwo">Contact</button>
        <div onClick={showNavbar} className="toggleIcon">
          <TiThMenu className="icon" />
        </div>
      </div>
    </div>
  );
}

export default Header;
