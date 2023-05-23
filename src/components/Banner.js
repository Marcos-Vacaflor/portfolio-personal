import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/header-img.png";
import TrackVisibility from "react-on-screen";

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = [ "Web Developer", "Front-end Developer" ];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <span className="tagline">Bienvenido a mí Portfolio</span>
                  <h1>
                    {`Hola, Soy Marcos`}{" "}
                    <span
                      className="txt-rotate"
                      dataPeriod="1000"
                      data-rotate='[ "Web Developer", "Front-end Developer" ]'
                    >
                      <span className="wrap">{text}</span>
                    </span>
                  </h1>
                  <p>
                    Hola, mi nombre es Marcos y soy un Desarrollador Frontend.
                    Siempre estuve muy relacionado al mundo de la tecnología,
                    especialmente en áreas como electrónica, mecánica, maquinas
                    industriales y computadoras. Además de mi formación técnica,
                    tengo un perfil autodidacta y considero distintas vías de
                    aprendizaje para mi capacitación. Estos últimos años he
                    decidido incursionar en programación, aprendiendo
                    tecnologías como HTML, CSS, JavaScript y React. Actualmente, sigo
                    capacitándome para encontrar lugares en los que pueda
                    fortalecer mis conocimientos al mismo tiempo que pueda
                    ofrecer un servicio de buena calidad.
                  </p>
                </div>
              )}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
          <TrackVisibility>
              {({ isVisible }) =>
                <div id="div-header" className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  <div id="div2-header" className={isVisible ? "animate__animated animate__zoomIn" : ""}>
              <img src={headerImg} alt="Header Img" />
            </div></div>}
             </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
