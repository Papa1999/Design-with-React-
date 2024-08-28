import React from "react";
import ContentImg from "../assets/Content.png";
import "./Style/Content.css";

export default function Content() {
  return (
    <section>
      <div className="container">
        <div className="two-col-grid">
          <div className="col-2">
            <div className="image-wrapper">
              <img src={ContentImg} alt="content" />
            </div>
          </div>
          <div className="col-1">
            <div className="contains-wrapper">
              <h3 className="subheader">Analytics</h3>
              <h2 className="subheading">
                built-in analytics to track your nfts
              </h2>
              <p>
                Use our built-in analytics dashboard to pull valuable insights
                and monitor the value of your Krypto portfolio over time.
              </p>

              <button className="btn-1">View our pricing</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
