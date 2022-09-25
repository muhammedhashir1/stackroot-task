import React from "react";
import { Container, Card } from "react-bootstrap";
import "./HomeComp.css";

function HomeComp() {
  return (
    <div className="banner">
      <Container className="m-auto">
        <Card className="card mt-5" style={{ width: "22rem"}}>
          <Card.Body>
            <Card.Title as="h3" className="fw-bold">
              Best Website & Application Development Company Rooting Your
              Business With Us
            </Card.Title>
            <Card.Text className="mt-3">
            We provide perfect solutions for your Business. We listen, do research and make plans together with our clients to reach clients goals, whether it be developing a website, a software or a product or a mobile application.
            </Card.Text>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
}

export default HomeComp;
