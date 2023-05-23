import logo1 from "../assets/img/HTML5_logo.png";
import logo2 from "../assets/img/CSS3_logo.png";
import logo3 from "../assets/img/JavaScript_logo.svg";
import logo4 from "../assets/img/React_logo.svg";
import logo5 from "../assets/img/Bootstrap_logo.svg";
import logo6 from "../assets/img/npm_logo.svg";
import logo7 from "../assets/img/git_logo.svg";
import logo8 from "../assets/img/Responsive_Web_Design_Logo.svg";
import logo9 from "../assets/img/Photoshop_logo.svg";
import logo10 from "../assets/img/Styled_Components_logo.png";
import logo11 from "../assets/img/libraries_logo.png";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import colorSharp from "../assets/img/color-sharp.png";

import TrackVisibility from "react-on-screen";

export const Skills = () => {




  const responsive = {
    superLargeDesktop: {
      
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
              <h2>Habilidades</h2>
              </div>)}
              </TrackVisibility>
              <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__slideInUp": ""}>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="owl-carousel owl-theme skill-slider"
              >
                <div  className="item">
                  <img  id="item1"src={logo1} alt="HTML" />
                  <h5>HTML</h5>
                </div>
                <div  className="item">
                  <img   id="item2"src={logo2} alt="CSS" />
                  <h5  >CSS</h5>
                </div>
                <div className="item">
                  <img  id="item3"src={logo3} alt="JavaScript" />
                  <h5 >JavaScript</h5>
                </div>
                <div  className="item">
                  <img  id="item4" src={logo4} alt="React" />
                  <h5 >React</h5>
                </div>
                <div  className="item">
                  <img id="item5"src={logo5} alt="Bootstrap" />
                  <h5  >Bootstrap</h5>
                </div>
                <div  className="item">
                  <img id="item10"src={logo10} alt="Styled Components" />
                  <h5  >Styled Components</h5>
                </div>
                <div  className="item">
                  <img id="item6"src={logo6} alt="Npm" />
                  <h5  >NPM</h5>
                </div>
                <div  className="item">
                  <img id="item7"src={logo7} alt="Git" />
                  <h5  >Git</h5>
                </div>
                 <div  className="item">
                  <img id="item8"src={logo8} alt="Responsive design" />
                  <h5  >Responsive Design</h5>
                </div>
                <div  className="item">
                  <img id="item9"src={logo9} alt="Photoshop" />
                  <h5  >Photoshop</h5>
                </div>
                <div  className="item">
                  <img id="item11"src={logo11} alt="+ Front-End Libraries" />
                  <h5  >+ Front-End Libraries</h5>
                </div>
              </Carousel></div>}
              </TrackVisibility>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="" />
    </section>
  );
};
