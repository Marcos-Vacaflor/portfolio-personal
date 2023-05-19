import { Container, Row, Col, Tab } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/Reproductor2.PNG";
import projImg2 from "../assets/img/movie-trailer.PNG";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import reproDoc from "../assets/reproductor de música .docx";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
  const projects = [
    {
      title: "Reproductor de Musica",
      description: " Vanilla JS",
      imgUrl: projImg1,
      pageLink:"https://glowing-frangollo-d71cbc.netlify.app/",
      doc:reproDoc
    },
    {
      title: "Traiflix",
      description: "React.js",
      imgUrl: projImg2,
      pageLink:"https://velvety-lollipop-341186.netlify.app/"
      
    },
    {
      title: "Proyecto",
      description: "Muy pronto...",
      imgUrl: projImg3,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Projectos</h2>
                  <p>
                    En esta sección podrá revisar versiones beta de mis
                    proyectos.
                  </p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" alt="bg" src={colorSharp2}></img>
    </section>
  );
};
