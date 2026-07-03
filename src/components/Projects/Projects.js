import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import movies from "../../Assets/Projects/2024-09-28 (3).png";
import market from "../../Assets/Projects/2024-09-28 (11).png";
import cart from "../../Assets/Projects/2024-09-28 (12).png";
import currency_converter from "../../Assets/Projects/2024-09-28 (13).png";
import translator from "../../Assets/Projects/2024-09-28 (14).png";
import male_fashion from "../../Assets/Projects/2024-09-28 (15).png";
import GPT4 from "../../Assets/Projects/Screenshot 2025-03-13 143411.png";

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
              title="Movies & Series (frontend)"
              description=" Using (Html , Css , Redux , Redux ToolKit , Tailwind , Material Tailwind ,
              React Icons )
              • This project offers a comprehensive collection of movies and series,
              complete with all the details imaginable, ensuring users have access to
              rich information and an enjoyable viewing experience."
              ghLink="https://github.com/Amir-017/aflam"
              demoLink="https://aflam-eta.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={market}
              isBlog={false}
              title="Market (frontend)"
              description=" Using (Html , Css , react , Tailwind , Material Tailwind , React Icons)
              •This project encompasses all essential life requirements, providing users
              with everything they need for a convenient and fulfilling daily experience.
              "
              ghLink="https://github.com/Amir-017/market"
              demoLink="https://market-brown-three.vercel.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={market}
              isBlog={false}
              title="Market (Full Stack)"
              description="A modern Full Stack MERN e-commerce application that provides a seamless shopping experience with a responsive and user-friendly interface. The project includes secure JWT authentication, product management, shopping cart, order management, RESTful APIs, and MongoDB database integration. Built with Next.js, React, Tailwind CSS, Material Tailwind, Node.js, Express.js, MongoDB, and deployed using Vercel."
              ghLink="https://github.com/Amir-017/marketProject_ConnectedWith_BackEnd.git"
              demoLink="https://market-project-connected-with-back.vercel.app/"
            />
          </Col>
           {/* <Col md={4} className="project-card">
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
          </Col> */}

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
