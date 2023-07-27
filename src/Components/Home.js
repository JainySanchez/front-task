import React from "react";
import "../Styles/Home.css";
import NavBarComp from "./NavBarComp";
import { Row } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import profilejainy from "../Images/profile-jainy.jpg";

function Home() {
  return (
    <div className="home-background">
      <NavBarComp />
      <div className ="custom-profile" >
        <Row>
          <Col xs={8} md={6} className="col">
            <Image src={profilejainy} roundedCircle style={{ width: "210px", height: "210px" }} />
          </Col>
          <Col xs={8} md={6} className="col">
            <h1 className="inline-header">Hi!</h1>
            <h2 className="inline-header2">I'm Jainy Sanchez       </h2>
            <h3 className="inline-header">Frontend Developer</h3>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default Home;
