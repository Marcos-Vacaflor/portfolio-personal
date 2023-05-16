import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "animate.css";
import TrackVisibility from "react-on-screen";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

export const Contact = () => {
  const form = useRef();
  const [buttonText, setButtonText] = useState('Send');
  const [status, setStatus] = useState({});


  const sendEmail = (e) => {
    e.preventDefault();
    setButtonText("Sending...");
    emailjs
      .sendForm(
        "service_9ty41pj",
        "template_p5024h5",
        form.current,
        "bLs9cdVImfQTVJnQ6"
      )
      .then(
        (result) => {
          console.log(result.text);
          setStatus({ succes: true, message: 'Message sent successfully'});
         
          setButtonText("Send");
        },
        (error) => {
          console.log(error.text);
          
          setStatus({ succes: false, message: 'Something went wrong, please try again later.'});
          
        }
      );
  };
  


  



  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <p className={isVisible ? "animate__animated animate__zoomIn" : ""}  alt="Contact Us"><h2>Gracias por la visita!</h2></p>
              }
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <h2>Pongase en contacto</h2>
                <form ref={form} onSubmit={(e)=>{sendEmail(e);}}>
                  <Row>
                    <Col size={12} sm={6} className="px-1">
                      <input type="text" name="user_firstname"  placeholder="First Name"  />
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="text" name="user_lasttname" placeholder="Last Name" />
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="email" name="user_email" placeholder="Email Address"  />
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="tel" name="user_number" placeholder="Phone No." />
                    </Col>
                    <Col size={12} className="px-1">
                      <textarea name="texttarea" rows="6"  placeholder="Message" ></textarea>
                      <button name="" type="submit"><span>{buttonText}</span></button>
                    </Col>
                    {
                      status.message &&
                      <Row>
                        <p >{status.message}</p>
                      </Row>
                    }
                  </Row>
                </form>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}





  

