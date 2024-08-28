import React from "react";
import "./Style/Footer.css";
export default function Footer() {
  return (
    <footer>
      <div className="container" id="F_container">
        <div className="column">krypto</div>
        <div className="column">
          krypto
          <div>
            <ul>
              <li>Home</li>
              <li>About</li>
              <li>Buy NFTs</li>
              <li>Sell NFTs</li>
            </ul>
          </div>
        </div>
        <div className="column">
          Market
          <div>
            <ul>
              <li>Browse NFTs</li>
              <li>Buy NFTs</li>
              <li>Sell NFTs</li>
            </ul>
          </div>
        </div>
        <div className="column">
          contact
          <div>
            <ul>
              <li>Email</li>
              <li>Twitter</li>
              <li>Instagram</li>
              <li>Facebook</li>
            </ul>
          </div>
        </div>
        <div className="column">
          join our newsletter
          <form className="contact">
            <input type="email" placeholder= "Email address" />
            <button className="submit"> submit </button>
          </form>
        </div>
      </div>
    </footer>
  );
}
