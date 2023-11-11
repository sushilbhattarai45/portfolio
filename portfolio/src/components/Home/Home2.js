import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import me from "../../Assets/pp.jpg";

import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import a1 from "../../Assets/my.jpg";
import a2 from "../../Assets/pp.jpg";
import a3 from "../../Assets/pp2.jpg";

import hm from "../../Assets/hm.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
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
                style={{ width: "100%", height: 400, borderRadius: "20%" }}
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
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              A tech enthusiast driven by the transformative power of
              programming.
              <br />
              <br />
              Committed to making a
              <i>
                <b className="purple"> Positive Impact </b>
              </i>
              through innovative projects.
              <br />
              <br />
              Hailing from a picturesque village in the heart of Nepal
              <b className="purple"> Lalyang, Syangja</b> .
              <br />
              <br />
              Passionate about harnessing technology for social change and
              empowerment
              <br />
              <br /> Believer in the potential of code to bring about .
              <i>
                <b className="purple"> real-world change</b>
              </i>
              &nbsp;
              <br />
              <br />
              Proficient in a wide range of technologies, from .
              <i>
                <b className="purple">
                  {" "}
                  React and Node.js to React Native, PHP, MongoDB, and SQL
                </b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              {/* <Slideshow /> */}
              <img
                src={me}
                className="img-fluid"
                alt="avatar"
                style={{
                  height: "300px",
                  width: "300px",
                  borderRadius: "50%",
                }}
              />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/sushilbhattarai45"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/Sushil_codes"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/sushilbhattarai45/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/sushil_bhattarai45"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
