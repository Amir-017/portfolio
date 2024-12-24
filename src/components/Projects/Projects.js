import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import male from "../../Assets/Projects/hero-1.c081bcff664751bf4f02-CjxkYEUr.jpg";
import movies from "../../Assets/Projects/2024-09-28 (3).png";
import market from "../../Assets/Projects/2024-09-28 (11).png";
import cart from "../../Assets/Projects/2024-09-28 (12).png";
import currency_converter from "../../Assets/Projects/2024-09-28 (13).png";
import translator from "../../Assets/Projects/2024-09-28 (14).png";
import male_fashion from "../../Assets/Projects/2024-09-28 (15).png";
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
              imgPath={movies}
              isBlog={false}
              title="Movies & Series"
              description=" Using (Html , Css , Redux , Redux ToolKit , Tailwind , Material Tailwind ,
React Icons )
• This project offers a comprehensive collection of movies and series,
complete with all the details imaginable, ensuring users have access to
rich information and an enjoyable viewing experience."
              ghLink="https://github.com/Amir-017/movies-series"
              demoLink="https://movies-series-95kb.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={market}
              isBlog={false}
              title="Market"
              description=" Using (Html , Css , react , Tailwind , Material Tailwind , React Icons)
•This project encompasses all essential life requirements, providing users
with everything they need for a convenient and fulfilling daily experience.
"
              ghLink="https://github.com/Amir-017/market"
              demoLink="https://market-gray-sigma.vercel.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={male_fashion}
              isBlog={false}
              title="Male Fashion"
              description=" I used into this project u React, Tailwind , CSS, and Tailwind Elements,
all website is responsive .This project revolves around selling clothing and everything related to
personal apparel. It features user registration, allowing customers to
login and store their information for a quicker and more seamless experience during future visits."
              ghLink="https://github.com/Amir-017/project-1"
              demoLink="https://project-1-one-beta.vercel.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cart}
              isBlog={false}
              title="Cart"
              description=" Using (Html , Css , react , Tailwind , Material Tailwind , React Icons )
• The cart feature allows users to perform various purchasing operations
and manage their selections with ease."
              ghLink="https://github.com/Amir-017/cart"
              demoLink="https://cart-nine-rouge.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={currency_converter}
              isBlog={false}
              title="Currency Converter"
              description="• Using (Html , Css , javascript , bootstrap )
• This project focuses on currency exchange, allowing users to compare
the value of one currency against another based on their selections,
providing real-time insights into exchange rates."
              ghLink="https://github.com/Amir-017/currency_converter"
              demoLink="https://currency-converter-ochre-eight.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={translator}
              isBlog={false}
              title="Translator"
              description=" Using (Html , Css , javascript , bootstrap )
• This project is translated into multiple languages, making it accessible to
users from all around the world.
"
              ghLink="https://github.com/Amir-017/translator"
              demoLink="https://translator-blush-two.vercel.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
