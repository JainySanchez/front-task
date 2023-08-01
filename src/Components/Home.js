import React from "react";
import "../Styles/Home.css";
import NavBarComp from "./NavBarComp";
import { Row } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import profilejainy from "../Images/profile-jainy.jpg";
import { motion } from "framer-motion"


function Home() {
  return (
    <div className="home-background">
      <NavBarComp />
      <div className="custom-profile" >
        <Row>
          <Col xs={8} md={6} className="col">
            <Image src={profilejainy} roundedCircle style={{ width: "210px", height: "210px" }} />
            {/* <div className="img-red">
              <img src={profilejainy} />
            </div> */}
          </Col>
          <Col xs={8} md={6} className="col">
            <motion.h1 initial={{ opacity: 0, scale: 0.5 }}
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
              }} className="inline-header">Hi!</motion.h1>
            <motion.h2 initial={{ opacity: 0, scale: 0.5 }}
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
              }} className="inline-header2">I'm Jainy Sanchez       </motion.h2>
            <motion.h3 initial={{ opacity: 0, scale: 0.5 }}
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
              }} className="inline-header">Frontend Developer</motion.h3>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default Home;
