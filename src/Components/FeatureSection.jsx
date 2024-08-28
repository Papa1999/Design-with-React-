import React from "react";
import "./Style/Feature_S.css";
import logo1 from "../assets/logo1.png";
import logo2 from "../assets/logo2.png";
import logo3 from "../assets/logo3.png";
import logo4 from "../assets/logo4.png";

export default function FeatureSection() {
  return (
    <section>
      <div className="Feature-Container">
        <h3 className="subheader">Feature on</h3>
        <div className="Feature-Logos">
          <div className="Logos_Container">
            <img src={logo4} alt="logo 4" />
          </div>
          <div className="Logos_Container">
            <img src={logo2} alt="logo 2" />
          </div>
          <div className="Logos_Container">
            <img src={logo3} alt="logo 3" />
          </div>
          <div className="Logos_Container">
            <img src={logo1} alt="logo 1" />
          </div>
        </div>
      </div>
    </section>
  );
}
