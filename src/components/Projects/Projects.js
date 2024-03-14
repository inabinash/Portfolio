import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import teleport from "../../Assets/Projects/teleport.png";
import SnapSwap from "../../Assets/Projects/SnapSwap.png";
import FileShare from "../../Assets/Projects/FileShare.png";
import warreth from "../../Assets/Projects/warreth.png";

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
              imgPath={teleport}
              isBlog={false}
              title="TelePort"
              description="Provides Tele Services such as register CSPs (Communication Service Providers) , Issue a mobile number for a end user and Porting of mobile number "
              ghLink="https://github.com/inabinash/TelePort"
              demoLink="tele-port-three.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={SnapSwap}
              isBlog={false}
              title="SnapSwap"
              description="SwapSnap is the ultimate crypto investment platform that helps you craft personalized token collections resembling mutual funds based on your risk profile."
              ghLink="https://github.com/inabinash/SnapSwap"
              demoLink="https://youtu.be/BToiAbwCRL4"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={warreth}
              isBlog={false}
              title="Warreth"
              description="Warreth is a Decentralised Warranty Issue platform that can be used by sellers to dispatch their warranties to buyers via a NFT built using Polygon"
              ghLink="https://github.com/inabinash/warreth"
              demoLink="https://bafybeie3vuqqeducccyk6keasbr4byuv2aktaip4dbo252etuj4o4b6fs4.ipfs.gateway.valist.io/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={FileShare}
              isBlog={false}
              title="FileShare"
              description="FileShare is web app which allows users to share large files without any restriction . "
              ghLink="https://github.com/soumyajit4419/Plant_AI"
              demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
