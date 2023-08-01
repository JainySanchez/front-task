import React from "react";
import "../Styles/About.css";
import react from "../Images/react.png";
import css from "../Images/css-3.png";
import html5 from "../Images/html-5.png";
import js from "../Images/js.png";
import github from "../Images/github.png";
import Button from "react-bootstrap/Button";
import { saveAs } from "file-saver";
import gmail from "../Images/gmail.png";
import linkedin from "../Images/linkedin.png";
import twitter from "../Images/twitter.png";
import github1 from "../Images/github1.png";
import { motion } from "framer-motion"

function About() {
  const downloadPdf = () => {
    // Ruta al archivo PDF dentro de la carpeta public/assets
    const pdfFilePath = "/assets/CV-SanchezArroyo_Jainy.pdf";

    // Descarga el archivo PDF
    saveAs(pdfFilePath, "CV-SanchezArroyo_Jainy.pdf");
  };
  return (
    <div className="about-background">
      <br></br>
      <br></br>
      <h1>About</h1>
      <div className="row about-content">
        <div className="col-md-4">
          <h2>Who am I ?</h2>
          <br />
          <h3>I'm Jainy Sanchez, Web Developer</h3>
          <br />
          <p>
            A systems engineer with more than 2 years of experience in frontend
            development. I have worked on enriching projects, improving my
            skills in HTML, CSS and JavaScript. In addition, I have experience
            in Vue.js, React and custom development in Netsuite. I am excited to
            grow professionally and bring value in a challenging environment.
          </p>
          <Button variant="outline-dark" onClick={downloadPdf}>
            Download CV
          </Button>
        </div>
        <div className="col-md-4">
          <h2>My Skills:</h2>
          <br />

          <div className="container-img">
            <img src={html5} alt="html" />
            <img src={css} alt="css" />
            <img src={js} alt="js" />
            <img src={react} alt="react" />
            <img src={github} alt="github" />
          </div>
        </div>
      </div>
      <div className="row about-content">
        <h1>Contact</h1>
        <h2>Contact me if you want us to work together</h2>
        <div className="container-img">
          <a
            href="mailto:your-email@example.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <motion.img
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.3,
                ease: [0, 0.71, 0.2, 1.01],
                scale: {
                  type: "spring",
                  damping: 5,
                  stiffness: 100,
                  restDelta: 0.001
                }
              }}
              // className="animate-jump-in animate-infinite animate-ease-in-out"
              src={gmail}
              alt="gmail"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/jainy-sanchez-arroyo-4425b025a/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <motion.img
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.3,
                ease: [0, 0.71, 0.2, 1.01],
                scale: {
                  type: "spring",
                  damping: 5,
                  stiffness: 100,
                  restDelta: 0.001
                }
              }} src={linkedin} alt="linkedin" />
          </a>
          <a
            href="https://twitter.com/Jainy61890940e"
            target="_blank"
            rel="noopener noreferrer"
          >
            <motion.img
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.3,
                ease: [0, 0.71, 0.2, 1.01],
                scale: {
                  type: "spring",
                  damping: 5,
                  stiffness: 100,
                  restDelta: 0.001
                }
              }} src={twitter} alt="twitter" />
          </a>
          <a
            href="https://github.com/JainySanchez"
            target="_blank"
            rel="noopener noreferrer"
          >
            <motion.img
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.3,
                ease: [0, 0.71, 0.2, 1.01],
                scale: {
                  type: "spring",
                  damping: 5,
                  stiffness: 100,
                  restDelta: 0.001
                }
              }} src={github1} alt="github" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default About;
