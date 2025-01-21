import React from "react";
import "./footer.css";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { BsDribbble } from "react-icons/bs";

function Footer() {
  return (
    <footer>
      <a href="#" className="footer__logo a-hover">
        &lt;Vaibhav<code>/&gt;</code>
      </a>
      <ul className="permalinks">
        <li>
          <a className="a-hover" href="#">
            <span>#Home</span>
          </a>
        </li>
        <li>
          <a className="a-hover" href="#about">
            <span>#About</span>
          </a>
        </li>
        <li>
          <a className="a-hover" href="#skills">
            <span>#Skills</span>
          </a>
        </li>
        <li>
          <a className="a-hover" href="#services">
            <span>#Education</span>
          </a>
        </li>
        <li>
          <a className="a-hover" href="#portfolio">
            <span>#Portfolio</span>
          </a>
        </li>
        <li>
          <a className="a-hover" href="#contact">
            <span>#Contact</span>
          </a>
        </li>
      </ul>
      <div className="footer__socials">
        <a
          href="https://linkedin.com/in/vaibhav-mali-841779218"
          target="_blank"
        >
          <BsLinkedin size={16} />
        </a>
        <a href="https://github.com/VaibhavMali001" target="_blank">
          <BsGithub size={16} />
        </a>
        <a href="https://twitter.com/vaibhavmali_01" target="_blank">
          <BsTwitter size={17} />
        </a>
      </div>

      <div className="footer__copyright">
        <small>
          &copy; <span className="footer-name">Vaibhav Mali.</span> All rights
          reserved
        </small>
      </div>
    </footer>
  );
}

export default Footer;
