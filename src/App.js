import "./App.css";
import imageMe from "./imgs/square-pic-me.jpg";
import logoMe from "./imgs/logo-me.png";

function App() {
  return (
    /* jshint ignore:start */
    <div className="App">
      <div id="top-block">
        <div id="header-container">
          <h1>Jose Jasso Jr.</h1>
          <img src={logoMe} alt="logo of me" id="logo-me"></img>
        </div>
      </div>
      <div id="main-container">
        <img src={imageMe} alt="meaningful text" id="picture-me"></img>
        <div id="right-container">
          <div id="about-me-container">
            <h1>About Me</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
              tincidunt est vitae purus hendrerit molestie. Pellentesque cursus
              sit amet nunc sed sodales. Proin sollicitudin urna felis, ac
              aliquet sem egestas malesuada. Sed et leo nec augue consequat
              luctus vehicula id felis. Duis a diam ex. Suspendisse pulvinar
              feugiat nisl ac egestas. Nunc venenatis blandit justo vitae
              mollis. In enim nulla, tristique eu rhoncus a, interdum ac sapien.
              Aliquam pretium pulvinar erat, et dignissim purus feugiat nec.
            </p>
            <p>
              "<i>I am the master of my fate, I am the captain of my soul.</i>"
              - William Ernest Henley
            </p>
          </div>
          <div id="links-container">
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
        </div>
      </div>
    </div>

    // <div>Icons made by <a href="https://www.flaticon.com/authors/google" title="Google">Google</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div><div>Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div><div>Icons made by <a href="https://www.flaticon.com/authors/justicon" title="justicon">justicon</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div><div>Icons made by <a href="https://www.flaticon.com/authors/icongeek26" title="Icongeek26">Icongeek26</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div><div>Icons made by <a href="https://www.flaticon.com/authors/laisa-islam-ani" title="Laisa Islam Ani">Laisa Islam Ani</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
    /* jshint ignore:end */
  );
}

export default App;
