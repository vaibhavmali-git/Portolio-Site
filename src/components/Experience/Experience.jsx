import React from "react";
import { SiReact } from "react-icons/si";
import "./experience.css";
import { SiHtml5 } from "react-icons/si";
import { ImCss3 } from "react-icons/im";
import { IoLogoJavascript } from "react-icons/io5";
import { TbBrandRedux } from "react-icons/tb";
import { SiBootstrap } from "react-icons/si";
import { FaGitSquare } from "react-icons/fa";
import { BsGithub } from "react-icons/bs";
import { BiLogoNetlify } from "react-icons/bi";
import { TbBrandVscode } from "react-icons/tb";
import { SiPostman } from "react-icons/si";
import { SiVercel } from "react-icons/si";

function Experience() {
  return (
    <section id="skills" className="skills-page">
    <h5>//What skills do I have</h5>
    <h2>&lt;Skills <code>/&gt;</code></h2>

    <div className="container skills__container">
      <div className="skills__frontend">
        <h3>&lt;Web Technologies <code>/&gt;</code></h3>
        <div className="skills__content">
          <article className="skills__details">
            <SiReact className="react-icon" size={60} />
            <p>React</p>
          </article>

          <article className="skills__details">
            <TbBrandRedux className="react-icon" size={60} />
            <h4>Redux</h4>
          </article>

          <article className="skills__details">
            <SiHtml5 className="react-icon" size={60} />
            <p>Html5</p>
          </article>

          <article className="skills__details">
            <ImCss3 className="react-icon" size={60} />
            <p>Css3</p>
          </article>

          <article className="skills__details">
            <IoLogoJavascript className="react-icon" size={60} />
            <p>Js</p>
          </article>

          <article className="skills__details">
            <SiBootstrap className="react-icon" size={60} />
            <h4>Bootstrap</h4>
          </article>
        </div>
      </div>

    {/* END OF FRONTEND  */}

      <div className="skills__tools">
        <h3>&lt;Tools <code>/&gt;</code></h3>
      <div className="skills__content">
          <article className="skills__details">
            <FaGitSquare  className="react-icon" size={60} />
            <p>Git</p>
          </article>

          <article className="skills__details">
            <BsGithub  className="react-icon" size={60} />
            <p>Github</p>
          </article>

          <article className="skills__details">
            <BiLogoNetlify  className="react-icon" size={100} />
            <p>Netlify</p>
          </article>

          <article className="skills__details">
            <TbBrandVscode className="react-icon" size={60} />
            <h4>VS Code</h4>
          </article>

          <article className="skills__details">
            <SiPostman className="react-icon" size={60} />
            <h4>Postman</h4>
          </article>

          <article className="skills__details">
            <SiVercel  className="react-icon" size={60} />
            <p>Vercel</p>
          </article>
          

        </div>
      </div>
    </div>
  </section>
  );
}

export default Experience;
