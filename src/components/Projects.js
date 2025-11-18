import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import { ExperienceCard } from "./ExperienceCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import { useLanguage } from "../contexts/LanguageContext";
import { translations } from "../translations/translations";

export const Projects = () => {
  const { language } = useLanguage();
  const t = translations[language];

  const projects = [
    {
      title: t.projects.projectItems[0].title,
      description: t.projects.projectItems[0].description,
      imgUrl: `${process.env.PUBLIC_URL}/p1.jpg`,
      url: "https://tienda-de-ropa-losperchas.onrender.com"
    },
    {
      title: t.projects.projectItems[1].title,
      description: t.projects.projectItems[1].description,
      imgUrl: `${process.env.PUBLIC_URL}/PruebaApi.PNG`,
      url: "https://danielarenasl.github.io/JavaScript/"
    },
    {
      title: t.projects.projectItems[2].title,
      description: t.projects.projectItems[2].description,
      imgUrl: projImg3,
    },
  ];

  const academicExperience = [
    {
      title: t.projects.academic.title,
      description: t.projects.academic.description,
      period: t.projects.academic.period,
      type: "education"
    }
  ];

  const workExperience = t.projects.work.map(work => ({
    title: work.title,
    description: work.description,
    period: work.period,
    type: "work"
  }));

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>{t.projects.title}</h2>
                <p>{t.projects.description}</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="academic">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="academic">{t.projects.education}</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="work">{t.projects.experience}</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="projects">{t.projects.projectsTab}</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="academic">
                      <Row className="justify-content-center">
                        {
                          academicExperience.map((exp, index) => {
                            return (
                              <ExperienceCard
                                key={index}
                                {...exp}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="work">
                      <Row>
                        {
                          workExperience.map((exp, index) => {
                            return (
                              <ExperienceCard
                                key={index}
                                {...exp}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="projects">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
