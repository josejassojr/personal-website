import "./Links.css";

function Links() {
  return (
    /* jshint ignore:start */
    <div className="Links">
      <div className="icon-container">
        Linkedin <i id="linkedin-icon" class="fab fa-linkedin"></i>
      </div>
      <div className="icon-container">
        Github <i id="github-icon" class="fab fa-github"></i>
      </div>
      <div className="icon-container">
        Email <i id="email-icon" class="far fa-envelope"></i>
      </div>
      <div className="icon-container">
        Resume <i id="resume-icon" class="far fa-file"></i>
      </div>
    </div>
    /* jshint ignore:end */
  );
}

export default Links;
