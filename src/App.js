import "./App.css";
import imageMe from "./media/images/square-pic-me.jpg";
import AboutMe from "./components/AboutMe/AboutMe";
import Header from "./components/Header/Header";
import React from "react";
import Resume from "./components/Resume/Resume";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    /* jshint ignore:start */
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Header />
          <div id="main-container">
            <div id="left-side" className="side">
              <img src={imageMe} alt="meaningful text" id="picture-me"></img>
            </div>
            <div id="right-side" className="side">
              <AboutMe />
            </div>
          </div>
        </Route>
        <Route path="/resume">
          <Resume />
        </Route>
      </Switch>
      {/* */}
    </div>
    /* jshint ignore:end */
  );
}

export default App;
