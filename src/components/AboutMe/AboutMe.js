// CSS and Modules
import "./AboutMe.css";
import React from "react";

// Components
import ListTechnologies from "../ListTechnologies/ListTechnologies";

function AboutMe() {
  return (
    /* jshint ignore:start */
    <div className="AboutMe">
      <div className="container">
        <h1 id="about-me-title">About Me!</h1>
      </div>
      <p id="about-me">
        Hi! My name is Jose Jasso Jr. and I recently graduated from UC Berkeley
        with a B.S. in Electrical Engineering and Computer Science (EECS).
        Recently I've been completing courses on{" "}
        <a
          href="https://www.freecodecamp.org/"
          target="_blank"
          id="fcc-link"
          rel="noreferrer"
        >
          freecodecamp.org
        </a>{" "}
        to continue honing my programming skills and learn concepts I did not
        get the chance to learn while in school.
        <br />
        <br /> I've been playing soccer almost all my life and still love doing
        so. I also enjoy watching movies and spending hours on YouTube whether
        it be on breakdowns of the newest MCU shows/films or deep dives on
        subjects that catch my attention.
        <br />
        <br />
        My goal is to join a great and exciting team I can contribute to as a
        Software Engineer and continue growing!
        <br />
        <br />
        Some technologies I have been working with recently:
      </p>
      <ListTechnologies />{" "}
    </div>
    /* jshint ignore:end */
  );
}

export default AboutMe;
