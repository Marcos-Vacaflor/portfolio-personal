import logo1 from "../assets/img/HTML5_logo.svg";
import logo2 from "../assets/img/CSS3_logo.svg";
import logo3 from "../assets/img/JavaScript_logo.svg";
import logo4 from "../assets/img/React_logo.svg";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png";
import { useState } from "react";
import TrackVisibility from "react-on-screen";

export const Skills = () => {
const [modalWindow ,setModalWindow]= useState("")



  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
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
              <p>
                En esta sección te informo mis habilidades tecnicas.
              </p></div>)}
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
                  <img onClick={(e)=>{setModalWindow(e.target.id);console.log(e.target.id)}} id="item1"src={logo1} alt="HTML" />
                  <h5>HTML</h5>
                </div>
                <div  className="item">
                  <img  onClick={(e)=>{setModalWindow(e.target.id);console.log(e.target.id)}} id="item2"style={{width:"38%", position:"relative",top:-5}}src={logo2} alt="CSS" />
                  <h5 style={{position:"relative",top:-9}} >CSS</h5>
                </div>
                <div className="item">
                  <img onClick={(e)=>{setModalWindow(e.target.id);console.log(e.target.id)}} id="item3"src={logo3} alt="JavaScript" />
                  <h5>JavaScript</h5>
                </div>
                <div  className="item">
                  <img onClick={(e)=>{setModalWindow(e.target.id);console.log(e.target.id)}} id="item4" src={logo4} alt="React" />
                  <h5 style={{position:"relative",top:15}}>React</h5>
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
