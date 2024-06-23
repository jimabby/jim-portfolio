import { Col, Container, Nav, Row, Tab } from 'react-bootstrap';
import gym from '../assets/img/gym.png';
import takeaway from '../assets/img/Takeaway.png';
import sociopedia from '../assets/img/sociopedia.png';
import moview from '../assets/img/Moview.png';
import architect from '../assets/img/architect.png';
import astute from '../assets/img/astute.png';
import auscraft from '../assets/img/auscraft.png';
import blackfog from '../assets/img/blackfog.png';
import bodywork from '../assets/img/bodywork.png';
import CMC from '../assets/img/CMC.png';
import compass from '../assets/img/compass.png';
import earrelief from '../assets/img/earrelief.png';
import elitegym from '../assets/img/elitegym.png';
import maxmise from '../assets/img/maxmise.png';
import medirecord from '../assets/img/medirecords.png';
import myownvet from '../assets/img/myownvet.png';
import SBO from '../assets/img/SBO.png';
import { ProjectCard } from './ProjectCard';
import colorSharp2 from '../assets/img/color-sharp2.png';

export const Projects = () => {
  const projects = [
    {
      title: "TakeAway Platform",
      description: "Website Design & Developemnt",
      imgUrl: takeaway,
    },
    {
      title: "Gym Website",
      description: "Website Design & Developemnt",
      imgUrl: gym,
    },
    {
      title: "Sociopedia",
      description: "Website Design & Developemnt",
      imgUrl: sociopedia,
    },
    {
      title: "BlackFog",
      description: "Website Design & Developemnt",
      imgUrl: blackfog,
    },
    {
      title: "ASHCROFT ARCHITECT",
      description: "Website Design & Developemnt",
      imgUrl: architect,
    },
    {
      title: "Moview",
      description: "Website Design & Developemnt",
      imgUrl: moview,
    },
  ];
  const projects1 = [
    {
      title: "MyOwnVet",
      description: "Website Design & Developemnt",
      imgUrl: myownvet,
    },
    {
      title: "MediRecords",
      description: "Website Design & Developemnt",
      imgUrl: medirecord,
    },
    {
      title: "EarRelief",
      description: "Website Design & Developemnt",
      imgUrl: earrelief,
    },
    {
      title: "SUSTAINABILITY COMPASS",
      description: "Website Design & Developemnt",
      imgUrl: compass,
    },
    {
      title: "CMC ELECTRICAL & COMMUNICATION",
      description: "Website Design & Developemnt",
      imgUrl: CMC,
    },
    {
      title: "SBO",
      description: "Website Design & Developemnt",
      imgUrl: SBO,
    },
  ];
  const projects2 = [
    {
      title: "Elite Performance Gym",
      description: "Website Design & Developemnt",
      imgUrl: elitegym,
    },
    {
      title: "BlackFog",
      description: "Website Design & Developemnt",
      imgUrl: blackfog,
    },
    {
      title: "Astute Realty",
      description: "Website Design & Developemnt",
      imgUrl: astute,
    },
    {
      title: "ASHCROFT ARCHITECT",
      description: "Website Design & Developemnt",
      imgUrl: architect,
    },
    {
      title: "Auscraft Kitchen",
      description: "Website Design & Developemnt",
      imgUrl: auscraft,
    },
    {
      title: "Moview",
      description: "Website Design & Developemnt",
      imgUrl: moview,
    },
  ];

  return (
    <section className='project' id='project'>
      <Container>
        <Row>
          <Col>
            <h2>Projects</h2>
            <p>Here are some of my projects.</p>
            <Tab.Container id='projects-tabs' defaultActiveKey="first">
              <Nav variant='pills' className='nav-pills mb-5 justify-content-center align-items-center' id='pills-tab'>
                <Nav.Item>
                  <Nav.Link eventKey="first">Tab One</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Tab Two</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">Tab Three</Nav.Link>
                </Nav.Item>
              </Nav>
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <Row>
                    {
                      projects.map((project, index) => {
                        return (
                          <ProjectCard key={index} {...project}/>
                        )
                      })
                    }
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  <Row>
                    {
                      projects1.map((project, index) => {
                        return (
                          <ProjectCard key={index} {...project}/>
                        )
                      })
                    }
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="third">
                  <Row>
                    {
                      projects2.map((project, index) => {
                        return (
                          <ProjectCard key={index} {...project}/>
                        )
                      })
                    }
                  </Row>
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
      <img className='background-image-right' src={colorSharp2}/>
    </section>
  )
}