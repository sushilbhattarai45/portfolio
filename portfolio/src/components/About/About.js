import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Github from "./Github";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import me from "../../Assets/pp.jpg";
import laptopImg from "../../Assets/about.png";
import Toolstack from "./Toolstack";
import a1 from "../../Assets/my.jpg";
import a2 from "../../Assets/pp.jpg";
import a3 from "../../Assets/pp2.jpg";
import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
function About() {
  const fadeImages = [
    {
      url: a1,
      caption: "First Slide",
    },
    {
      url: a2,
      caption: "Second Slide",
    },
    {
      url: a3,
      caption: "Third Slide",
    },
  ];
  const Slideshow = () => {
    return (
      <div className="slide-container">
        <Fade arrows={false} duration={2000}>
          {fadeImages.map((fadeImage, index) => (
            <div key={index}>
              <img
                style={{ width: "80%", height: 400, borderRadius: "20%" }}
                src={fadeImage.url}
              />
              {/* <h2
                style={{
                  align: "center",
                }}
              >
                {fadeImage.caption}
              </h2> */}
            </div>
          ))}
        </Fade>
      </div>
    );
  };
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              Know Who <strong className="purple">I'M</strong>
            </h1>
            <Aboutcard />
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            <Slideshow />
            {/* <img
              src={me}
              alt="about"
              className="img-fluid"
              style={{
                borderRadius: "20%",
                width: "400px",
                height: "400px",
              }}
            /> */}
          </Col>
        </Row>
        <h1 className="project-heading">
          Professional <strong className="purple">Skillset </strong>
        </h1>

        <Techstack />

        <h1 className="project-heading">
          <strong className="purple">Tools</strong> I use
        </h1>
        <Toolstack />

        <Github />
      </Container>
    </Container>
  );
}

export default About;
