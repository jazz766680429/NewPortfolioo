import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

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
              imgPath={chatify}
              isBlog={false}
              title="EGR sheet evaluator"
              description="Basically it was an automatic EGR sheet evaluator which itself evaluates the assignment without any human help . It compares the students autocad image with the ideal image and based on that it evaluates the sheet.
              I was responsible for documenting and presenting the image processing module's functionality, performance, and results to team members, management, . My effective communication skills and ability to present complex technical concepts in a clear and concise manner were instrumental in facilitating team discussions and obtaining feedback for further improvements."
              ghLink="#"
              
            />
          </Col>

         
          

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="DDoS attack and its Prevention"
              description="Led a cybersecurity project developing robust DDoS attack prevention measures, enhancing network resilience and mitigating potential disruptions. Implemented advanced defense strategies and collaborated with cross-functional teams to fortify the system against cyber threats. Successfully safeguarded critical infrastructure and maintained uninterrupted service availability. In this project we performed a ddos attack on the website we demonstrated how ddos attack is being done on a site.
              The project aims to develop a robust DDoS (Distributed Denial of Service) attack detection and mitigation system to protect computer networks and services from malicious attacks."
              ghLink=""
              demoLink=""
            />
          </Col>

          

          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
