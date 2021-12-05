import "./Links.css";
import React from "react";
import logoMe from "../../media/images/me-longbeach.jpg";
// import Resume from "../../media/resume.pdf";
// import { Route, Switch } from "react-router-dom";

// import { Route } from "react-router-dom";
function Links() {
  return (
    /* jshint ignore:start */

    <div className="Links">
      {/* <img src={logoMe} alt="logo of me" id="logo-me"></img> */}
      <a
        href="https://www.linkedin.com/in/josejassojr/"
        target="_blank"
        rel="noreferrer"
        className="link"
      >
        {/* <div id="linkedin-container" className="icon-container"> */}
        Linkedin <i id="linkedin-icon" class="fab fa-linkedin"></i>
        {/* </div>{" "} */}
      </a>
      <a
        href="https://github.com/josejassojr"
        target="_blank"
        rel="noreferrer"
        className="link"
      >
        {/* <div className="icon-container"> */}
        Github <i id="github-icon" class="fab fa-github"></i>
        {/* </div> */}
      </a>
      <a
        href="mailto:jose.d.jassojr@gmail.com"
        target="_blank"
        rel="noreferrer"
        className="link"
      >
        {/* <div id="email-container" className="icon-container"> */}
        Email <i id="email-icon" class="far fa-envelope"></i>
        {/* </div>{" "} */}
      </a>
      <a
        href="/resume.pdf"
        target="_blank"
        rel="noreferrer"
        className="link"
        id="resume-link"
        // download
      >
        {/* Need to add link for resume to show pdf... Route it?  */}
        {/* <div className="icon-container"> */}
        Resume <i id="resume-icon" class="far fa-file"></i> {/* </div> */}
      </a>
      <img src={logoMe} alt="logo of me" id="logo-me"></img>
    </div>
    /* jshint ignore:end */
  );
}

export default Links;
