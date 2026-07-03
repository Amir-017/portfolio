import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
    <Card.Body>
  <blockquote className="blockquote mb-0">
    <p style={{ textAlign: "justify" }}>
      Hi Everyone, I am <span className="purple">Amir Whdan</span> from{" "}
      <span className="purple">Cairo, Egypt.</span>
      <br />
      I am a passionate{" "}
      <span className="purple">Full Stack MERN Developer</span> with over
      2 years of experience building modern, scalable, and responsive web
      applications.
      <br />
      <br />
      I enjoy turning ideas into real-world products, solving complex
      problems, and continuously learning new technologies to become a
      better software engineer.
      <br />
      <br />
      Apart from coding, here are a few things I enjoy:
    </p>

    <ul>
      <li className="about-activity">
        <ImPointRight /> Learning New Technologies
      </li>
      <li className="about-activity">
        <ImPointRight /> Building Personal Projects
      </li>
      <li className="about-activity">
        <ImPointRight /> Solving Programming Challenges
      </li>
      <li className="about-activity">
        <ImPointRight /> Exploring Software Architecture
      </li>
    </ul>

    <p style={{ color: "rgb(155 126 172)" }}>
      "Code with purpose. Build with passion. Never stop learning."
    </p>

    <footer className="blockquote-footer">Amir</footer>
  </blockquote>
</Card.Body>
    </Card>
  );
}

export default AboutCard;
