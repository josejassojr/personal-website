import "./Links.css";
import React from "react";
import logoMe from "../../media/images/me-longbeach.jpg";

function Links() {
  return (
    /* jshint ignore:start */
    <div className="Links">
      <a
        href="https://www.linkedin.com/in/josejassojr/"
        target="_blank"
        rel="noreferrer"
        className="link"
      >
        Linkedin <i id="linkedin-icon" class="fab fa-linkedin"></i>
      </a>
      <a
        href="https://github.com/josejassojr"
        target="_blank"
        rel="noreferrer"
        className="link"
      >
        Github <i id="github-icon" class="fab fa-github"></i>
      </a>
      <a
        href="mailto:jose.d.jassojr@gmail.com"
        target="_blank"
        rel="noreferrer"
        className="link"
      >
        Email <i id="email-icon" class="far fa-envelope"></i>
      </a>
      <a
        href="/resume"
        target="_blank"
        rel="noreferrer"
        className="link"
        id="resume-link"
      >
        Resume <i id="resume-icon" class="far fa-file"></i>
      </a>
      <img src={logoMe} alt="logo of me" id="logo-me"></img>
    </div>
    /* jshint ignore:end */
  );
}

export default Links;
