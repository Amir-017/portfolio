import React from "react";
import { Col, Row } from "react-bootstrap";
import { DiJavascript1, DiReact, DiHtml5 } from "react-icons/di";
import img from "../../Assets/te-transparent-noshadows.webp";
import { SiBootstrap, SiTailwindcss, SiGithub, SiFigma } from "react-icons/si";
import {
  TbBrandRedux,
  TbBrandCss3,
  TbBrandReactNative,
  TbCircleLetterMFilled,
} from "react-icons/tb";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiFigma />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGithub />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <TbBrandRedux />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiBootstrap />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiHtml5 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiTailwindcss />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <TbBrandCss3 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={img} />
      </Col>{" "}
      <Col xs={4} md={2} className="tech-icons bg-black">
        &#109;
      </Col>
    </Row>
  );
}

export default Techstack;
