import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            I am <span className="purple"> Sushil Bhattarai</span>, a dedicated
            tech enthusiast whose fascination with technology and programming
            led me to pursue{" "}
            <span className="purple"> Computer Engineering </span>from an early
            age, starting in grade 9. This decision marked the beginning of a
            transformative journey. As the founding president of the{" "}
            <span className="purple"> ICT Club of KMGSS</span>, I have actively
            promoted tech innovation and education. I also hold the position of{" "}
            <span className="purple">
              {" "}
              District IT Officer at Interact District 3292, Nepal, and Bhutan,{" "}
            </span>{" "}
            where I continue to make a meaningful impact in community.
            <br />
            <br /> My deep-rooted passion for technology serves as the driving
            force behind my endeavors, and I am always eager to take on new
            challenges and explore the endless possibilities that the tech world
            has to offer. In 2023, I achieved the prestigious title of{" "}
            <span className="purple"> National Level Hackathon Champion </span>
            , a recognition bestowed upon me by IOE Purwanchal Campus. I am
            excited about the future in this ever-evolving landscape. <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Cricket
            </li>
            <li className="about-activity">
              <ImPointRight />
              Reading Books
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Difculties are the essence of success!"{" "}
          </p>
          {/* <footer className="blockquote-footer">Sushil</footer> */}
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
