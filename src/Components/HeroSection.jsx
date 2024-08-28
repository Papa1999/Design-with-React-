import React from "react";
import "./Style/Hero_S.css";
import heroImg from "../assets/heroImg.png";

export default function HeroSection() {
  return (
    <section>
      <div className="container">
        <div className="two-col-grid">
          <div className="col-1">
            <div className="contains-wrapper">
              <h1>Discovers and Collect rare NFTs</h1>
              <p>
                The most secure marketplace for buyingand selling unique crypto
                assets.
              </p>

              <button className="btn-1">Buy NFTs</button>
              <button className="btn-2">Sell NFTs</button>
            </div>
          </div>
          <div className="col-2">
            <div className="image-wrapper">
              <img src={heroImg} alt="Hero" />
            </div>
          </div>

          <div className="cercles">
            <div className="cercle1"></div>
            <div className="cercle2"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
