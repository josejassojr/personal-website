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
      <p id="about-me">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac leo
        tellus. In fermentum volutpat elit, eget fermentum metus lacinia vel.
        Sed suscipit tempus nisi, eget eleifend erat elementum quis. Quisque
        sodales egestas egestas. In eleifend nunc id erat varius, sed egestas
        lacus feugiat. Donec neque tortor, varius eu consequat a, mollis eu
        nisi. Donec eros elit, tincidunt ac vulputate non, sagittis at purus.
        Duis in massa sed dolor semper faucibus in eu ex. Quisque aliquet
        rhoncus nulla quis tincidunt. Sed porta auctor porta. Sed vestibulum
        urna a ullamcorper pellentesque. Donec et est at justo luctus auctor eu
        ut orci. Nullam eu eros bibendum, tincidunt diam euismod, aliquet sem.
        Nunc purus justo, congue eu lacus nec, lacinia bibendum est.
      </p>
      <div id="quote-container" className="container">
        <p id="quote">
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
