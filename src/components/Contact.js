import { useRef, useState } from "react"
import { Col, Container, Row } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import emailjs from "@emailjs/browser";

export const Contact = () => {
  const [buttonText, setButtonText] = useState('Send');
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setButtonText('Sending...');
    emailjs.sendForm('service_rxvllnw','template_ag5abp5',form.current,'RsMGDSFegXHpttgll').then((result) =>{
      alert('Message successfully sent!');
      window.location.reload(false);
    }, (error) => {
      alert('Failed to send the message, please try again!');
    });
  }

  return (
    <section className="contact" id="contact">
      <Container>
        <Row className="align-items-center">
          <Col md={6}>
            <img src={contactImg} alt="Contact Us"/>
          </Col>
          <Col md={6}>
            <h2>Get in Touch</h2>
            <form ref={form} onSubmit={sendEmail}>
              <Row>
                <Col size={12} sm={6} className="px-1">
                  <input type="text" name="firstName" placeholder="First Name" required />
                </Col>
                <Col size={12} sm={6} className="px-1">
                  <input type="text" name="lastName" placeholder="Last Name" required />
                </Col>
                <Col size={12} sm={6} className="px-1">
                  <input type="email" name="email" placeholder="Email Address" required/>
                </Col>
                <Col size={12} sm={6} className="px-1">
                  <input type="tel" name="tel" placeholder="Phone Number" required/>
                </Col>
                <Col size={12} className="px-1">
                  <textarea row="6" name="message" placeholder="Message" required/>
                  <button type="submit"><span>{buttonText}</span></button>
                </Col>
              </Row>
            </form>
          </Col>
        </Row>
      </Container>
    </section>  
  )
}