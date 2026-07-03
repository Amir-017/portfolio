import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/WhatsApp Image 2024-09-28 at 15.59.21_024861f2.jpg";
import Tilt from "react-parallax-tilt";
import { AiFillGithub } from "react-icons/ai";
import { MdOutgoingMail } from "react-icons/md";

import { FaLinkedinIn } from "react-icons/fa";
import About from "../About/About";
import Projects from "../Projects/Projects";
import ResumeNew from "../Resume/ResumeNew";
function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>

            <p className="home-about-body">
              I'm a passionate <b className="purple">Full Stack MERN Developer</b> who
              enjoys building modern, scalable, and user-friendly web applications.
              I love transforming ideas into real-world products and continuously
              learning new technologies to improve my skills.
              <br />
              <br />

              My core technical skills include
              <i>
                <b className="purple">
                  {" "}
                  HTML5, CSS3, JavaScript (ES6+), TypeScript, React.js, Next.js,
                  Redux Toolkit, Tailwind CSS, Bootstrap, Node.js, Express.js,
                  MongoDB, Mongoose, REST APIs, JWT Authentication, Socket.IO,
                  Git & GitHub.
                </b>
              </i>

              <br />
              <br />

              I enjoy developing
              <i>
                <b className="purple">
                  {" "}
                  Full Stack Web Applications
                </b>
              </i>
              , creating responsive user interfaces, designing secure backend
              architectures, building RESTful APIs, and integrating databases with
              modern frontend technologies.

              <br />
              <br />

              I'm always focused on writing
              <i>
                <b className="purple">
                  {" "}
                  clean, maintainable, and scalable code
                </b>
              </i>
              while following best practices to deliver high-performance web
              applications with an excellent user experience.
            </p>
          </Col>

          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid rounded-2" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/Amir-017"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              {/* <li className="social-icons">
                <a
                  href="https://twitter.com/Soumyajit4419"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li> */}
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/amir-whdan-5b4148261/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="mailto:amiirwhdan@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <MdOutgoingMail />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
      <About />
      <Projects />
      <ResumeNew />
    </Container>
  );
}
export default Home2;
