import "./Footer.css";
import React from "react";

function Footer() {
  return (
    /* jshint ignore:start */
    <footer className="Footer">
      Created by Jose Jasso Jr.{" "}
      <a
        href="https://www.linkedin.com/in/josejassojr/"
        target="_blank"
        rel="noreferrer"
        className="link"
      >
        <i class="fab fa-linkedin"></i>
      </a>
      <a
        href="https://github.com/josejassojr"
        target="_blank"
        rel="noreferrer"
        className="link"
      >
        <i class="fab fa-github"></i>
      </a>
      <a
        href="mailto:jose.d.jassojr@gmail.com"
        target="_blank"
        rel="noreferrer"
        className="link"
      >
        <i class="far fa-envelope"></i>
      </a>
    </footer>
    /* jshint ignore:end */
  );
}
export default Footer;
