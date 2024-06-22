import { Col, Container, Row } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import meter1 from '../assets/img/meter1.svg';
import meter2 from '../assets/img/meter2.svg';
import meter3 from '../assets/img/meter3.svg';
import colorSharp from '../assets/img/color-sharp.png'

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: {max: 4000, min: 3000},
      items: 6
    },
    desktop: {
      breakpoint: {max: 3000, min: 1024},
      items: 3
    },
    tablet: {
      breakpoint: {max: 1024, min: 464},
      items: 2
    },
    mobile: {
      breakpoint: {max: 464, min: 0},
      items: 1
    },
  }
  
  return (
    <section className="skill" id="skills">
      <Container>
        <Row>
          <Col>
            <div className="skill-bx">
              <h2>
                Skills
              </h2>
              <p>
                I am a full stack web developer with a passion for creating interactive and responsive web application. 
                I have experienced working with HTML, CSS, JavaScript, React, Redux, TypeScript, Bootstrap, Angular, Vue, 
                Python, Java, Node.js, MySQL, MongoDB and Git. 
                I am a quick learner and I am always looking to expand my knowledge and skill set. 
                I am a team player and I am excited to work with others tp create amazing applications. 
              </p>
              <Carousel responsive={responsive} infinite={true} className="skill-slider">
                <div className="item">
                  <img src={meter1} alt="skills"/>
                  <h5>Web Development</h5>
                </div>
                <div className="item">
                  <img src={meter3} alt="skills"/>
                  <h5>Software Development</h5>
                </div>
                <div className="item">
                  <img src={meter2} alt="skills"/>
                  <h5>Web Design</h5>
                </div>
                <div className="item">
                  <img src={meter3} alt="skills"/>
                  <h5>Logo Design</h5>
                </div>
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
      <img className="background-image-left" src={colorSharp} />
    </section>
  )
}