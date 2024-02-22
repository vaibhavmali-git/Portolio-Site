import React from "react";
import "./about.css";
import ME from "../../assets/me-about.jpg";
import { FaAward } from "react-icons/fa6";
import { RiFolderChartFill } from "react-icons/ri";

function About() {
  return (
    <section id="about" className="about-page">
      <h5>//Get to Know</h5>
      <h2>
        &lt;About me <code>/&gt;</code>
      </h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Responsive Web Design</h5>
            </article>

            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Component-Based Development</h5>
            </article>

            <article className="about__card">
              <RiFolderChartFill className="about__icon" />
              <h5>Proficient in React</h5>
            </article>
          </div>

          <p>
            <span className="list-hash1">#</span> Hello, I'm Vaibhav. I’m a
            front-end developer based in Jalgaon, India. Over the past 1.5
            years, I have immersed myself in the world of front-end development,
            actively seeking a challenging role in frontend development within a
            reputable company.I can develop responsive websites from scratch and
            raise them into modern user-friendly web experiences.
          </p>
          <p>
            <span className="list-hash1">#</span> My journey in front-end
            development has been marked by a commitment to continuous learning
            and improvement. I always strive to learn about the newest
            technologies and frameworks.
          </p>

          <a href="#contact" className="btn btn-primary">
            Lets Talk
          </a>
        </div>
      </div>
    </section>
  );
}

export default About;
