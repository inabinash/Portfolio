import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "../Projects/ProjectCards";
import Particle from "../Particle";
import NFT from "../../Assets/Blogs/NFT.png"
import Solana from "../../Assets/Blogs/Solana.png";

export default function Blogs() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Blogs </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few blogs I've written recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={NFT}
              isBlog={true}
              title="NFT : What is it's future ?"
              description="How NFT is becoming a necessity and taking us to a new era of internet ."
              ghLink="https://abinashgupta.substack.com/p/nft-what-is-its-future"
              demoLink="tele-port-three.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Solana}
              isBlog={true}
              title="Solana : The Ethereum Killer"
              description="It discovers how Solana is revolutionizing the blockchain technology and challeging the existing ones."
              ghLink="https://abinashgupta.substack.com/p/solana-the-ethereum-killer?sd=pf"
              demoLink="https://youtu.be/BToiAbwCRL4"
            />
          </Col>

          
          
        </Row>
      </Container>
    </Container>
  );
}

