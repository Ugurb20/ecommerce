import React from "react";
import Nav from "../nav/nav";
import "./hero.css";

export default function Hero() {
  return (
    <div className="hero-container" id="home">
      <Nav />
      <div className="hero-text-wrapper">
        <h1 className="white-heading" id="observer-line">
          Furniture for your home
        </h1>
        <p className="hero-paragraph">
          Handmade furniture specially designed for your taste by our great
          designers.
        </p>
      </div>
    </div>
  );
}
