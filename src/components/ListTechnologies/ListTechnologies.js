import "./ListTechnologies.css";
import React from "react";

function ListTechnologies() {
  return (
    /* jshint ignore:start */
    <div className="ListTechnologies">
      <div className="container">
        <h3>Some technologies I have been working with recently:</h3>
      </div>

      <ul>
        <li>
          <span>
            <i class="fas fa-angle-right"></i>
          </span>{" "}
          Python
        </li>
        <li>
          <span>
            <i class="fas fa-angle-right"></i>
          </span>{" "}
          Node/Express
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
          HTML & CSS
        </li>
      </ul>
    </div>
    /* jshint ignore:end */
  );
}
export default ListTechnologies;