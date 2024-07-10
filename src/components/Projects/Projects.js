import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import blood from "../../Assets/Projects/blood.jpg";
import garbage from "../../Assets/Projects/garbage.jpg";
import Netflix from "../../Assets/Projects/netflix.jpg";
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
              imgPath={blood}
              isBlog={false}
              title="BloodBuddy"
              description="BloodBuddy is a php based web application for user as well as admin. It helps create awareness among users towars blood donation and allows them to do so by simply registering themselves with BloodBuddy. The admin can easily manage the data of donors and its availability. It also has a unique feature of changing the content of website on hand."
              ghLink="https://github.com/Snehee12/BloodBuddy"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={garbage}
              isBlog={false}
              title="GarboScan"
              description="GarboScan is a webapp that helps in classifying different types of waste materials into 8 classes using machine learning algorithm. After the type of waste is identified it suggests its disposal techniques and help in creating awareness among people about correct waste disposal techniques."
              ghLink="https://github.com/Snehee12/GarboScan"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Netflix}
              isBlog={false}
              title="Netflix Clone"
              description="Clone of Netflix made using HTML,CSS and JS. Whereas homepage made using React. This project is intended for conceptual learning."
              ghLink=""              
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
