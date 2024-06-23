import { Col, Container, Nav, Row, Tab } from 'react-bootstrap';
import projIm1 from '../assets/img/project-img1.png';
import { ProjectCard } from './ProjectCard';
import colorSharp2 from '../assets/img/color-sharp2.png';

export const Projects = () => {
  const projects = [
    {
      title: "TakeAway Platform",
      description: "Website Design & Developemnt",
      imgUrl: projIm1,
    },
    {
      title: "Gym Website",
      description: "Website Design & Developemnt",
      imgUrl: projIm1,
    },
    {
      title: "Sociopedia",
      description: "Website Design & Developemnt",
      imgUrl: projIm1,
    },
    {
      title: "Personal Portfolio",
      description: "Website Design & Developemnt",
      imgUrl: projIm1,
    },
    {
      title: "E-commerce website",
      description: "Website Design & Developemnt",
      imgUrl: projIm1,
    },
    {
      title: "Moview",
      description: "Website Design & Developemnt",
      imgUrl: projIm1,
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
                  Content
                </Tab.Pane>
                <Tab.Pane eventKey="third">
                  Content
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