import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiBootstrap,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiMongoose,
  SiJsonwebtokens,
  SiSocketdotio,
  SiGit,
  SiGithub,
  SiPostman,
  SiFigma,
  SiVisualstudiocode,
  SiNpm,
  SiAxios,
  SiSwagger,
  SiVite,
  SiEslint,
  SiPrettier,
  SiRender,
  SiVercel,
} from "react-icons/si";

import { TbBrandRedux } from "react-icons/tb";

function Techstack() {
  return (
  <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
  {/* Frontend */}
  <Col xs={4} md={2} className="tech-icons"><SiHtml5 title="HTML5" /></Col>
  <Col xs={4} md={2} className="tech-icons"><SiCss3 title="CSS3" /></Col>
  <Col xs={4} md={2} className="tech-icons"><SiJavascript title="JavaScript" /></Col>
  <Col xs={4} md={2} className="tech-icons"><SiTypescript title="TypeScript" /></Col>
  <Col xs={4} md={2} className="tech-icons"><SiReact title="React" /></Col>
  <Col xs={4} md={2} className="tech-icons"><SiNextdotjs title="Next.js" /></Col>
  <Col xs={4} md={2} className="tech-icons"><TbBrandRedux title="Redux Toolkit" /></Col>
  <Col xs={4} md={2} className="tech-icons"><SiTailwindcss title="Tailwind CSS" /></Col>
  <Col xs={4} md={2} className="tech-icons"><SiBootstrap title="Bootstrap" /></Col>

  {/* Backend */}
  <Col xs={4} md={2} className="tech-icons"><SiNodedotjs title="Node.js" /></Col>
  <Col xs={4} md={2} className="tech-icons"><SiExpress title="Express.js" /></Col>

  {/* Database */}
  <Col xs={4} md={2} className="tech-icons"><SiMongodb title="MongoDB" /></Col>
  {/* <Col xs={4} md={2} className="tech-icons"><SiMongoose title="Mongoose" /></Col> */}

  {/* APIs & Authentication */}
  <Col xs={4} md={2} className="tech-icons"><SiAxios title="Axios" /></Col>
  <Col xs={4} md={2} className="tech-icons"><SiJsonwebtokens title="JWT" /></Col>
  <Col xs={4} md={2} className="tech-icons"><SiSwagger title="Swagger" /></Col>
  <Col xs={4} md={2} className="tech-icons"><SiSocketdotio title="Socket.IO" /></Col>

  {/* File Upload */}
  {/* <Col xs={4} md={2} className="tech-icons"><SiCloudinary title="Cloudinary" /></Col> */}
  {/* <Col xs={4} md={2} className="tech-icons"><SiMulter title="Multer" /></Col> */}

  {/* Development Tools */}
  <Col xs={4} md={2} className="tech-icons"><SiGit title="Git" /></Col>
  <Col xs={4} md={2} className="tech-icons"><SiGithub title="GitHub" /></Col>
  <Col xs={4} md={2} className="tech-icons"><SiPostman title="Postman" /></Col>
  <Col xs={4} md={2} className="tech-icons"><SiFigma title="Figma" /></Col>
  <Col xs={4} md={2} className="tech-icons"><SiVisualstudiocode title="VS Code" /></Col>
  <Col xs={4} md={2} className="tech-icons"><SiNpm title="npm" /></Col>
  <Col xs={4} md={2} className="tech-icons"><SiVite title="Vite" /></Col>
  <Col xs={4} md={2} className="tech-icons"><SiEslint title="ESLint" /></Col>
  <Col xs={4} md={2} className="tech-icons"><SiPrettier title="Prettier" /></Col>

  {/* Deployment */}
  <Col xs={4} md={2} className="tech-icons"><SiVercel title="Vercel" /></Col>
  <Col xs={4} md={2} className="tech-icons"><SiRender title="Render" /></Col>
</Row>
  );
}

export default Techstack;
