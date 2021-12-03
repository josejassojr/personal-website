import "./Header.css";
import logoMe from "../../media/images/logo-me.png";

function Header() {
  return (
    /* jshint ignore:start */
    <div className="Header">
      <div id="header-container">
        <h1>Jose Jasso Jr.</h1>
        <img src={logoMe} alt="logo of me" id="logo-me"></img>
      </div>
    </div>
    /* jshint ignore:end */
  );
}
export default Header;
