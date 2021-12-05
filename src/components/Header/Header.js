import "./Header.css";
import React from "react";
import Links from "../Links/Links";
function Header() {
  return (
    /* jshint ignore:start */
    <div className="Header">
      <div id="name-logo">
        <h1>Jose's Personal Website</h1>
      </div>
      <Links />
    </div>
    /* jshint ignore:end */
  );
}
export default Header;
