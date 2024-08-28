import React from "react";
import "./Style/Navbar.css";

export default function Navbar() {
  return (
    <nav className="Navbar-container">
      <div className="Navbar-logo">
        Krypto
      </div>
      <div className="Navbar-list_button">
        <ul className="Navbar-list">
          <li className="Navbar-item">About</li>
          <li className="Navbar-item">Pricing</li>
          <li className="Navbar-item">Contact</li>
        </ul>
        <div className="Cercle_Button">
          <div className="Cercle"></div>
          <div className="Button">Buy nfts</div>
        </div>
      </div>
    </nav>
  );
}
