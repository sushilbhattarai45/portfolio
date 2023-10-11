import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import yaatru from "../../Assets/Projects/yaatru.jpg";
import voice from "../../Assets/Projects/voice.jpg";
import rn from "../../Assets/Projects/rn.jpg";
import ss from "../../Assets/Projects/ss.jpg";
import emed from "../../Assets/Projects/emed.jpg";
import leaf from "../../Assets/Projects/leaf.png";
import security from "../../Assets/Projects/security.jpg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={yaatru}
              isBlog={false}
              title="Yaatru"
              description="Welcome to the Yaatru- Planet Tourism Office, your one-stop destination for celestial exploration and unforgettable interstellar journeys. Our office is designed to provide information, inspiration, and booking services for travelers seeking to experience the wonders of space. Whether you dream of walking on the Martian surface, witnessing the rings of Saturn up close, or experiencing the beauty of a distant exoplanet, we're here to make your cosmic dreams a reality. "
              ghLink="https://github.com/sushilbhattarai45/Yaatru"
              demoLink="https://yaatru.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={voice}
              isBlog={false}
              title="Voice Pet"
              description="Introducing VoicePet, an advanced platform that leverages ChatGPT and AppWrite to deliver prompt and accurate responses to user voice commands. Whether you need information, recommendations, or assistance, VoicePet is your go-to companion, providing helpful answers through the power of natural language processing. Experience a new level of convenience with VoicePet's intelligent voice-driven responses."
              ghLink="https://github.com/sushilbhattarai45/interviewpet"
              demoLink="https://interviewpet.vercel.app/home/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emed}
              isBlog={false}
              title="E-Med Nepal"
              description="E-Med Nepal is a platform which helps to centralize the medical reports of a patient which can only be accessible by Hospital which will further give clarity to the doctors about the existing medical history of the patient."
              ghLink="https://github.com/soumyajit4419/Editor.io"
              demoLink="https://e-med-nepal.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={rn}
              isBlog={false}
              title="Ragat Nepal (Blood Nepal)"
              description="Ragat Nepal, also known as Blood Nepal, is a React Native-based social service platform available on the Google Play Store. This app enables people in Nepal to easily request and donate blood, aiding over 1000 individuals in times of need. It serves as a crucial bridge between donors and those in search of life-saving blood donations, highlighting the potential of technology to connect and assist people during medical emergencies."
              ghLink="https://github.com/sushilbhattarai45/ragat-nepal"
              demoLink="https://www.ragatnepal.com"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={security}
              isBlog={false}
              title="Password Vault & Manager"
              description="The Password Vault and Manager app is a robust solution designed for securely storing and managing sensitive login credentials and personal information. Built using React Native, it offers a seamless user experience across multiple platforms. The app leverages the power of PHP and SQL database technology to ensure that user data remains encrypted and protected. With this app, users can easily organize and access their passwords, providing a convenient and secure way to navigate the complex world of online security."
              ghLink="https://github.com/sushilbhattarai45/Password-vault-and-manager-app"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ss}
              isBlog={false}
              title="International Space Station Tracker"
              description="The International Space Station Tracker is an exciting project that emerged from the NASA Space App Challenge 2022, developed by me and my talented team. This innovative app utilizes cutting-edge technology, including 3.js, and incorporates detailed 3D models of the International Space Station (ISS) and the Earth. With this app, users can track the real-time position and trajectory of the ISS as it orbits the Earth, providing a captivating and educational experience."
              ghLink="https://satellite-isstracker.netlify.app/"
              demoLink="https://satellite-isstracker.netlify.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
