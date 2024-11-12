import { useState } from "react";
import hhLogo from "../dodaci/HH.jpg";



function Footer() {
  return (
    <footer>
      <div>
        <p style={{ fontSize: '14px' }}>Note Keeper</p>
      </div>
      <div className="author">
        <a id="gh-link" href="https://github.com/huseinspahich">
          <div>Made by</div>
          <img id="gh-logo" src={hhLogo} alt="" />
          <div>Harun Huseinspahic</div>
        </a>
      </div>
      <div>
        <p style={{ fontSize: '14px' }}>
          Copyright © {new Date().getFullYear()} 
        </p>
      </div>
    </footer>
  );
}

export default Footer;
