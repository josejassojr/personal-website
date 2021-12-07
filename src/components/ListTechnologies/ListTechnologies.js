// CSS and Modules
import "./ListTechnologies.css";
import React from "react";

function ListTechnologies() {
  return (
    /* jshint ignore:start */
    <div className="ListTechnologies">
      <div className="container">
        <h2 id="title-list">
          Some technologies I have been working with recently:
        </h2>
      </div>
      <ul id="list-technologies">
        <li id="python">
          <span>
            <i class="fas fa-angle-right"></i>
          </span>{" "}
          Python
        </li>
        <li>
          <span>
            <i class="fas fa-angle-right"></i>
          </span>{" "}
          Node
        </li>
        <li>
          <span>
            <i class="fas fa-angle-right"></i>
          </span>{" "}
          Javascript
        </li>
        <li>
          <span>
            <i class="fas fa-angle-right"></i>
          </span>{" "}
          React
        </li>
        <li>
          <span>
            <i class="fas fa-angle-right"></i>
          </span>{" "}
          MongoDB
        </li>
        <li>
          <span>
            <i class="fas fa-angle-right"></i>
          </span>{" "}
          HTML/CSS
        </li>
      </ul>
    </div>
    /* jshint ignore:end */
  );
}
export default ListTechnologies;
