import "./Links.css";
import React from "react";

function Links() {
  return (
    /* jshint ignore:start */
    <div className="Links">
      <a
        href="https://www.linkedin.com/in/josejassojr/"
        target="_blank"
        rel="noreferrer"
        class="link"
      >
        <div id="linkedin-container" className="icon-container">
          Linkedin <i id="linkedin-icon" class="fab fa-linkedin"></i>
        </div>{" "}
      </a>
      <a
        href="https://github.com/josejassojr"
        target="_blank"
        rel="noreferrer"
        class="link"
      >
        <div className="icon-container">
          Github <i id="github-icon" class="fab fa-github"></i>
        </div>
      </a>
      <a
        href="mailto:jose.d.jassojr@gmail.com"
        target="_blank"
        rel="noreferrer"
        class="link"
      >
        <div id="email-container" className="icon-container">
          Email <i id="email-icon" class="far fa-envelope"></i>
        </div>{" "}
      </a>
      {/* Need to add link for resume to show pdf... Route it?  */}
      <div className="icon-container">
        Resume <i id="resume-icon" class="far fa-file"></i>{" "}
      </div>
    </div>
    /* jshint ignore:end */
  );
}

export default Links;
