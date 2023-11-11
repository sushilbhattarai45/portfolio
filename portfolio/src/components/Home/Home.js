import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.svg";
import Particle from "../Particle";
import hm from "../../Assets/hm.svg";
import Home2 from "./Home2";
import a1 from "../../Communityimg/4.jpg";
import a2 from "../../Communityimg/12.jpg";
import a3 from "../../Communityimg/11.jpg";

import Type from "./Type";
import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
function Home() {
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
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I'M
                <strong className="main-name"> SUSHIL BHATTARAI</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <Slideshow />
              {/* <img
                src={hm}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              /> */}
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;
