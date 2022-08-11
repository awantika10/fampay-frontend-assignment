import React from 'react';
import "./Header.css";
import Logo from "../../assets/fampaylogo.png";

function Header() {
  return (
    <>
      <div className="header">
        <img src ={Logo} alt="logo" className="logo"/>
      </div>
    </>
  )
}

export default Header