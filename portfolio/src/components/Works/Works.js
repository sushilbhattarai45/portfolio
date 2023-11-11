import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import WorkCards from "./WorkCards";
import Particle from "../Particle";
import anil from "../../Communityimg/1.jpg";
import installaton from "../../Communityimg/2.jpg";

import cosog from "../../Communityimg/11.jpg";
import rn from "../../Communityimg/rn.JPG";
import heartday from "../../Communityimg/4.jpg";
import cleanup from "../../Communityimg/5.jpg";
import a1 from "../../Communityimg/4.jpg";
import a2 from "../../Communityimg/12.jpg";
import a3 from "../../Communityimg/11.jpg";

import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import letterhead from "../../Communityimg/7.jpg";
import plantation from "../../Communityimg/8.jpg";

//Honors

import h1 from "../../Communityimg/15.jpg";
import h2 from "../../Communityimg/16.jpg";
import h3 from "../../Communityimg/17.jpg";
import h4 from "../../Communityimg/22.jpg";
import h5 from "../../Communityimg/19.jpg";
import h6 from "../../Communityimg/20.jpeg";

function Works() {
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
      <div
        className="slide-container"
        style={{
          marginTop: 30,
        }}
      >
        <Fade arrows={true} duration={1500}>
          {fadeImages.map((fadeImage, index) => (
            <div key={index}>
              <img
                style={{ width: "50%", height: 400, borderRadius: "20px" }}
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
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent{" "}
          <strong className="purple"> Community - Engagements </strong>
        </h1>

        <Slideshow />

        <p style={{ color: "white", marginTop: 20 }}>
          Here are a few community projects I've worked on recently.
        </p>

        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <WorkCards
              imgPath={heartday}
              isBlog={false}
              title="World Heart Day Rally"
              description="We actively participated in the World Health Day rally organized in Butwal by Rotary Clubs, passionately spreading awareness about the significance of a healthy heart. Amidst the vibrant atmosphere, our team joined forces with fellow participants to emphasize the importance of cardiovascular health. Through engaging conversations, informative materials, and collaborative efforts, we aimed to inspire a collective commitment to heart health within the community. The rally served as a powerful platform to advocate for healthy lifestyle choices and underscored our dedication to contributing to public health initiatives."
              // ghLink="https://github.com/sushilbhattarai45/interviewpet"
              // demoLink="https://interviewpet.vercel.app/home/"
            />
          </Col>
          <Col md={4} className="project-card">
            <WorkCards
              imgPath={installaton}
              isBlog={false}
              title="Project Manavta- Supplies to Specially Abled People"
              description="We initiated a meaningful program called Project Manavta, dedicated to supporting the Nepal Specially Abled Home. Our efforts extended beyond just providing supplies; we organized interactive sessions specifically tailored for the residents with special abilities. This inclusive approach aimed to foster engagement, understanding, and a sense of community. By combining material support with interactive sessions, Project Manavta sought to make a positive impact on the lives of those at the Nepal Specially Abled Home, emphasizing empathy and inclusivity."
              ghLink="https://github.com/sushilbhattarai45/E-Med-Nepal"
              demoLink="https://e-med-nepal.vercel.app/"
            />
          </Col>{" "}
          <Col md={4} className="project-card">
            <WorkCards
              imgPath={anil}
              isBlog={false}
              title="Finance Literacy : Project Aantaran"
              description="In collaboration with the Interact Club of Peace Zone School, I took the responsibility as the event lead for a week-long program, delving into seven distinct topics with experts from various fields. The finance literacy session, a key highlight, featured an enlightening address by Mr. Anil Kshery Shah, a luminary in the business industry. Steering the event, I ensured a seamless orchestration, aiming to create an engaging platform for participants to absorb valuable insights and foster community connections. The program, marked by its diversity of subjects and esteemed guests, reflects my commitment to leading initiatives that not only inform but also inspire."
              // ghLink="https://github.com/sushilbhattarai45/Yaatru"
              // demoLink="https://yaatru.vercel.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <WorkCards
              imgPath={cosog}
              isBlog={false}
              title="Spreading knowledge of STEM"
              description="The COSOG Nepal team embarked on an enlightening journey by conducting diverse STEM sessions across various schools in Nepal. Our aim was to equip students with valuable knowledge in the fields of Science, Technology, Engineering, and Mathematics (STEM). Going a step further, we initiated the establishment of computer clubs within these schools. This collaborative effort not only facilitated the dissemination of STEM education but also created dedicated spaces for students to explore and enhance their computer skills. The initiative reflects our commitment to fostering a passion for learning and technological literacy among the youth in Nepal."
              ghLink="https://github.com/sushilbhattarai45/ragat-nepal"
              demoLink="https://www.ragatnepal.com"
            />
          </Col>
          <Col md={4} className="project-card">
            <WorkCards
              imgPath={rn}
              isBlog={false}
              title="Ragat Nepal"
              description="The Password Vault and Manager app is a robust solution designed for securely storing and managing sensitive login credentials and personal information. Built using React Native, it offers a seamless user experience across multiple platforms. The app leverages the power of PHP and SQL database technology to ensure that user data remains encrypted and protected. With this app, users can easily organize and access their passwords, providing a convenient and secure way to navigate the complex world of online security."
              ghLink="https://github.com/sushilbhattarai45/Password-vault-and-manager-app"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>
          <Col md={4} className="project-card">
            <WorkCards
              imgPath={cleanup}
              isBlog={false}
              title="Regular CleanUp Camps"
              description="Teaming up with the local community, we orchestrated a cleanup camp at Hill Park, a significant green oasis in Butwal. The goal was to work hand in hand with residents to restore the park's vibrancy and cleanliness. Enthusiastically tackling litter and environmental concerns, our collaborative efforts aimed to make Hill Park an even more inviting and sustainable space for the entire community to enjoy. The event underscored the power of community engagement and collective action in nurturing and preserving our shared public spaces."
              ghLink="https://satellite-isstracker.netlify.app/"
              demoLink="https://satellite-isstracker.netlify.app/"
            />
          </Col>
        </Row>

        <p style={{ color: "white", marginTop: 20 }}>
          {" "}
          Some other Important
          <strong className="purple"> Glimpses </strong>
        </p>

        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <WorkCards
              imgPath={h1}
              isBlog={false}
              title="Honoured from the Advisors"
              description="This photo represents the end of my one-year term as president of ICT Club of KMGSS, where I was honored by advisors and teachers for my hard work. Throughout the year, I organized various tech events like workshops, robotics competitions, and codecamps. The recognition reflects not just my efforts but the teamwork and shared passion that made our tech community thrive during my time as president."
              // ghLink="https://github.com/sushilbhattarai45/interviewpet"
              // demoLink="https://interviewpet.vercel.app/home/"
            />
          </Col>
          <Col md={4} className="project-card">
            <WorkCards
              imgPath={h2}
              isBlog={false}
              title="Honoured from our School's Principal"
              description="In this memorable moment, my team and I were honored by our school principal, Mr. Dinesh Thapa, for our outstanding representation of the school in national events. This recognition acknowledges the dedication and achievements of our team as we proudly carried the school's name to new heights on a larger stage. It's a testament to our collective efforts and commitment to excellence, and this award reflects the school's appreciation for our contributions to its reputation on a national level."
              // ghLink="https://github.com/sushilbhattarai45/interviewpet"
              // demoLink="https://interviewpet.vercel.app/home/"
            />
          </Col>
          <Col md={4} className="project-card">
            <WorkCards
              imgPath={h3}
              isBlog={false}
              title="Getting Awarded from Computer Association of Nepal"
              description="We were overjoyed to win a silver medal in the Oxford Web Development Competition and received an honor from the Computer Association of Nepal - Rupandehi. It was a fantastic achievement for our team, showcasing our skills in web development. The award is not just a medal; it's a recognition of our hard work and support from the local computer community. Winning this silver medal makes us really proud and motivates us to keep excelling in technology."
              // ghLink="https://github.com/sushilbhattarai45/interviewpet"
              // demoLink="https://interviewpet.vercel.app/home/"
            />
          </Col>
          <Col md={4} className="project-card">
            <WorkCards
              imgPath={h4}
              isBlog={false}
              title="National Level Hackathon Champions"
              description="In this unforgettable photo, our team celebrates being crowned the National Level Hackathon Champions of 2023 at the prestigious 'Delatathon' event. Notably, we proudly carried the title as the youngest team to compete, adding an extra layer of accomplishment to our victory. The image captures the culmination of our hard work, innovation, and determination, marking a significant milestone in our journey. This achievement not only brings personal pride but also highlights our capability to excel at the national level in the dynamic field of hackathons."
              // ghLink="https://github.com/sushilbhattarai45/interviewpet"
              // demoLink="https://interviewpet.vercel.app/home/"
            />
          </Col>
          <Col md={4} className="project-card">
            <WorkCards
              imgPath={h5}
              isBlog={false}
              title="Honoured by the Advisor of Interact Club of Sagarmatha Devdaha"
              description="In this special moment captured in the image, I was invited and honored as a guest at a state-level 'Quiz Competition' organized by the Interact Club of Sagarmatha Devdaha. It was a true privilege to be recognized in this way and to contribute to an event that promotes intellectual engagement. The image captures the gratitude and enthusiasm of the occasion, marking a unique intersection of knowledge and community recognition. As a guest, I had the opportunity to share insights and celebrate the spirit of intellectual competition with the Interact Club of Sagarmatha Devdaha."
              // ghLink="https://github.com/sushilbhattarai45/interviewpet"
              // demoLink="https://interviewpet.vercel.app/home/"
            />
          </Col>
          <Col md={4} className="project-card">
            <WorkCards
              imgPath={h6}
              isBlog={false}
              title="Clinching the title of Best Zone in the District Sports Meet"
              description="n this cherished photo, the memory of clinching three medals at the 1st District Sports Meet of Interact District 3292 Nepal and Bhutan is immortalized. The event was not only a personal triumph but also a collective success, as our zone was later honored as the best zone in the District Sports Meet. This image encapsulates the joy of individual achievement and the pride that comes with contributing to the overall success of our zone in the DSM. It serves as a reminder of the hard work, dedication, and team spirit that defined our participation in this memorable sports event."
              // ghLink="https://github.com/sushilbhattarai45/interviewpet"
              // demoLink="https://interviewpet.vercel.app/home/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Works;
