import "./AboutMe.css";
import ListTechnologies from "../ListTechnologies/ListTechnologies";
import React from "react";

function AboutMe() {
  return (
    /* jshint ignore:start */
    <div className="AboutMe">
      <div className="container">
        <h1>About Me!</h1>
      </div>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
        tincidunt est vitae purus hendrerit molestie. Pellentesque cursus sit
        amet nunc sed sodales. Proin sollicitudin urna felis, ac aliquet sem
        egestas malesuada. Sed et leo nec augue consequat luctus vehicula id
        felis. Duis a diam ex. Suspendisse pulvinar feugiat nisl ac egestas.
        Nunc venenatis blandit justo vitae mollis. In enim nulla, tristique eu
        rhoncus a, interdum ac sapien. Aliquam pretium pulvinar erat, et
        dignissim purus feugiat nec.
      </p>
      <div className="container">
        <p>
          "<i>I am the master of my fate, I am the captain of my soul.</i>" -
          William Ernest Henley
        </p>
      </div>

      <ListTechnologies />
    </div>
    /* jshint ignore:end */
  );
}

export default AboutMe;
