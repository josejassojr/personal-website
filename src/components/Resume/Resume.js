import React from "react";
import "./Resume.css";
import resume from "../../media/resume.pdf";

export default function Resume() {
  return (
    /* jshint ignore:start */
    <div className="div-iframe" path="/resume.pdf">
      <iframe
        type="application/pdf"
        className="iframe"
        src={resume}
        title="myResume"
      />
    </div>
    /* jshint ignore:end */
  );
}
