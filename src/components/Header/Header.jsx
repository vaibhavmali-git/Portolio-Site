import React from "react";
import "./header.css";
import CTA from "./CTA";
import ME from '../../assets/me.png'
import HeaderSocials from "./HeaderSocials";
import {FaSquare} from 'react-icons/fa'

function Header() {
  
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>&lt;Vaibhav Mali <code>/&gt;</code></h1>
        <h5 className="text-light">//Frontend Developer</h5>
        <CTA className="cta-"/>
        <HeaderSocials />
        
        <div className="me">
          <img src={ME} alt="me" />
          {/* <div className="current-project">
          //Currently working on Portfolio Project
        </div> */}
        </div>
       

        <a href="#contact" className="scroll_down">#Scroll Down</a>
      
      </div>
    </header>
  );
}

export default Header;
