import { Col, Container, Row } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg from "../assets/img/header-img.svg";
import { useEffect, useState } from "react";
import { HashLink } from 'react-router-hash-link';
import {BrowserRouter as Router} from "react-router-dom";

export const Banner = () => {
  const [loopNum, setLoppNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const toRotate = ["A Full Stack Developer", "A Software Developer", "A UI/UX Designer"];
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta)

    return () => { clearInterval(ticker)};
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);
    
    setText(updatedText);

    if(isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === ''){
      setIsDeleting(false);
      setLoppNum(loopNum + 1);
      setDelta(500);
    }
  }

  return (
    <Router>
      <section className="banner" id="home">
        <Container>
          <Row className="align-items-center">
            <Col xs={12} md={6} xl={7}>
              <span className="tagline">
                Welcome to my Portfolio!
              </span>
              <h1>{`Hi! I'm Jim. `}<br /><span className="wrap">{text}</span></h1>
              <p>Dynamic IT professional with a Master of Information and Technology from the University of Queensland
                and a Bachelor of Science Degree in Mathematics from Michigan State University. Skilled in software and
                web development with expertise in React, Python, Java, and cloud computing platforms like AWS and Azure.</p>
              <HashLink to="#contact" style={{textDecoration:'none'}}>
                <button onCanPlay={() => {}}>Let's Connect! <ArrowRightCircle size={25} /></button>
              </HashLink>
            </Col>
            <Col xs={12} md={6} xl={5}>
              <img src={headerImg} alt="Header Img" />
            </Col>
          </Row>
        </Container>
      </section>
    </Router>
  )
}