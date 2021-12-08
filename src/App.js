// CSS, Modules, and Media
import "./App.css";
import React from "react";
import Resume from "./components/Resume/Resume";
import imageMe from "./media/images/square-pic-me.jpg";
import { Route, Switch } from "react-router-dom";

// Components
import Footer from "./components/Footer/Footer";
import AboutMe from "./components/AboutMe/AboutMe";
import Header from "./components/Header/Header";

function App() {
  return (
    /* jshint ignore:start */
    <div className="App">
      <Switch>
        <Route exact path="/">
          {/* <div id="home-container"></div> */}
          <Header />
          <div id="main-container">
            <div id="left-side" className="side">
              <img
                src={imageMe}
                alt="me, standing in front of a rail"
                id="picture-me"
              ></img>
              <div id="quote-container" className="container">
                <p id="quote">
                  "
                  <i>
                    I am the master of my fate, I am the captain of my soul.
                  </i>
                  "
                  <br /> -William Ernest Henley
                </p>
              </div>
            </div>
            <div id="right-side" className="side">
              <AboutMe />
            </div>
          </div>{" "}
          <Footer />
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
