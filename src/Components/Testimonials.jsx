import React from "react";
import "./Style/Testimonials.css";
import client1 from "../assets/client1.png";
import client2 from "../assets/client2.png";
import client3 from "../assets/client3.png";

export default function Testimonials() {
  return (
    <section>
      <div className="container">
        <h3 className="subheader" id="T_subheader">
          Testimonials
        </h3>
        <h2 className="subheading" id="T_subheading">
          Read what others have to say
        </h2>
        <div className="testimonials">
          <div className="card">
            <img src={client3} alt="" />
            <h3 className="subheader">olivia cole</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              ullamcorper scelerisque mi, in malesuada felis malesuada vel.
            </p>
          </div>
          <div className="card">
            <img src={client2} alt="" />
            <h3 className="subheader">evan White</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              ullamcorper scelerisque mi, in malesuada felis malesuada vel.
            </p>
          </div>
          <div className="card">
            <img src={client1} alt="" />
            <h3 className="subheader"> Jessica Page</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              ullamcorper scelerisque mi, in malesuada felis malesuada vel.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
