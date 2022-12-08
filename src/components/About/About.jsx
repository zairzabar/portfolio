import React from "react";
// import "./About.css";
import Me from "../../assets/me-about.jpg";
import { BiCodeBlock, BiFolderOpen } from "react-icons/bi";
import { FiUsers } from "react-icons/fi";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container-2 about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={Me} alt="" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <BiCodeBlock className="about__icon" />
              <h5>Experience</h5>
              <small>3+ years of working</small>
            </article>

            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Clients</h5>
              <small>300+ worldwide</small>
            </article>

            <article className="about__card">
              <BiFolderOpen className="about__icon" />
              <h5>Projects</h5>
              <small>80+ projects</small>
            </article>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
              similique, officia sed beatae deserunt vitae quae harum? Eius,
              nobis quo eum aspernatur doloribus, accusamus officia odio culpa
              nesciunt magnam illo?
            </p>

            <a href="#contact" className="btn btn-primary">
              Let's Talk
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
