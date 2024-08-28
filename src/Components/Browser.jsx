import React from "react";
import Phone from "../assets/Phone.png";

export default function Browser() {
  return (
    <section>
      <div className="container">
        <div className="two-col-grid">
          <div className="col-1">
            <div className="contains-wrapper">
              <h3 className="subheader">Get our app</h3>
              <h2 className="subheading">
                Browse your nFTs from your smartphone
              </h2>
              <p>
                Our Krypto app is the easiest way to keep track of your assets
                when you’re on the go
              </p>

              <button className="btn-1">Download on ios</button>
            </div>
          </div>
          <div className="col-2">
            <div className="image-wrapper">
              <img src={Phone} alt="content" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
