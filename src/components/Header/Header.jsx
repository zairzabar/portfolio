import React from "react";
import Me from "../../assets/me.png";
import CTA from "./CTA";
import HeaderSocial from "./HeaderSocial";
import "./Header.css";

export default function Header() {
  return (
    <header className="header">
      <HeaderSocial />
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Ouzair</h1>
        <h5 className="text-light">Frontend Developer</h5>
      </div>

      <CTA />

      <div className="me__header">
        <img src={Me} alt="" />
      </div>

      <a href="#contact" className="scroll__down">
        Scroll Down
      </a>
    </header>
  );
}
