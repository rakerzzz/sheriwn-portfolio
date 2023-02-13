// import Button from "react-bootstrap/Button";
import { Button, Image, Card, Form, Modal } from "react-bootstrap";
import {
  Facebook,
  Linkedin,
  Github,
  GeoAlt,
  Telephone,
  Envelope,
} from "react-bootstrap-icons";
import Figmalogo from "./assets/img/figmalogo.png";
import HTMLlogo from "./assets/img/htmllogo.png";
import CSSlogo from "./assets/img/csslogo.png";
import JSlogo from "./assets/img/jslogo.png";
import MongoDBlogo from "./assets/img/mongodb.png";
import Expressjslogo from "./assets/img/expressjs.png";
import Reactjslogo from "./assets/img/reactjs.png";
import Nodejslogo from "./assets/img/nodejs.png";
import DigitalOceanlogo from "./assets/img/digitaloceanlogo.png";
import Githublogo from "./assets/img/githublogo.png";
import Mercantilbanner from "./assets/img/projects/Travel_App_Header2.png";
import Figarobanner from "./assets/img/projects/figaroimanage.png";
import JapanSushibanner from "./assets/img/projects/japansushibanner.png";
import NQinventorybanner from "./assets/img/projects/nq.png";
import Aboutmepicture from "./assets/img/aboutme/Aboutme.png";
import SLlogo from "./assets/img/SLlogo.png";
import SLprofile from "./assets/img/SherwinProfile.png";
import "./assets/css/custom.css";
import React, { useState, useEffect } from "react";
import ImageGallery from "react-image-gallery";
import projectImages from "./response/projectImages.json";
import "animate.css";

// const images = [
//   {
//     original:
//       "https://drive.google.com/uc?export=download&id=1AJNM9rPtOBIgftAkazdzdJyDOb0v-JU_",
//     thumbnail:
//       "https://drive.google.com/uc?export=download&id=1AJNM9rPtOBIgftAkazdzdJyDOb0v-JU_",
//   },
//   {
//     original:
//       "https://drive.google.com/uc?export=download&id=1AJNM9rPtOBIgftAkazdzdJyDOb0v-JU_",
//     thumbnail:
//       "https://drive.google.com/uc?export=download&id=1AJNM9rPtOBIgftAkazdzdJyDOb0v-JU_",
//   },
//   {
//     original:
//       "https://drive.google.com/uc?export=download&id=1AJNM9rPtOBIgftAkazdzdJyDOb0v-JU_",
//     thumbnail:
//       "https://drive.google.com/uc?export=download&id=1AJNM9rPtOBIgftAkazdzdJyDOb0v-JU_",
//   },
// ];

class MyGallery extends React.Component {
  constructor(props) {
    super(props);
    this.app = props.app;
    // console.log(this.app);
  }

  render() {
    return (
      <ImageGallery
        items={projectImages[this.app]}
        showFullscreenButton={false}
        showPlayButton={false}
      />
    );
  }
}

function MyVerticallyCenteredModal(props) {
  // console.log(props.app);
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header className="py-1" closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Project Screenshots
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="px-0 pt-0">
        <MyGallery app={props.app} />
      </Modal.Body>
    </Modal>
  );
}

function MyVerticallyCenteredModal2(props) {
  // console.log(props.app);
  return (
    <Modal
      {...props}
      size="sm"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header className="py-1" closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Underconstruction
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="px-0 pt-0 text-center">
        No Function yet.
      </Modal.Body>
    </Modal>
  );
}

const containerStyles = {
  backgroundImage: `url(${Githublogo})`,
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  height: "100px",
  width: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: "5px 5px 0px 0px",
};

function App() {
  const [modalShow, setModalShow] = useState(false);
  const [modalShow2, setModalShow2] = useState(false);
  const [projectName, setProjectName] = useState("");
  // console.log(projectImages);

  const handleClick = (message) => {
    setModalShow(true);
    setProjectName(message);
  };

  // console.log(projectName);

  return (
    <main className="vh-100 overflow-auto">
      <MyVerticallyCenteredModal
        show={modalShow}
        app={projectName}
        onHide={() => setModalShow(false)}
      />

      <MyVerticallyCenteredModal2
        show={modalShow2}
        onHide={() => setModalShow2(false)}
      />
      <div className="container-fluid h-100 bg-light">
        <div className="container h-100 d-flex flex-column align-items-center justify-content-center pb-4">
          <div className="row">
            <div className="col-lg-6 col-sm-12 custom-border-end ">
              {/* header */}
              <div className="d-flex flex-column align-items-center">
                {/* <Image
              src={SLprofile}
              style={{ width: "180px", height: "180px" }}
              className="mb-3 rounded-4 border border-2 border-secondary"
            /> */}
                <svg
                  className="Playground__svg customsvg mb-3 rounded-4 border border-2 border-secondary"
                  width="180"
                  height="180"
                >
                  <defs>
                    <filter
                      id="filter"
                      x="-20%"
                      y="-20%"
                      width="350%"
                      height="300%"
                      filterUnits="objectBoundingBox"
                      primitiveUnits="userSpaceOnUse"
                      colorInterpolationFilters="linearRGB"
                    >
                      <feMorphology
                        operator="dilate"
                        radius="10 0"
                        x="0%"
                        y="0%"
                        width="100%"
                        height="100%"
                        in="SourceGraphic"
                        result="morphology1"
                      ></feMorphology>
                    </filter>
                    <filter
                      id="filter-2"
                      x="-20%"
                      y="-20%"
                      width="350%"
                      height="500%"
                      filterUnits="objectBoundingBox"
                      primitiveUnits="userSpaceOnUse"
                      colorInterpolationFilters="linearRGB"
                    >
                      <feMorphology
                        operator="dilate"
                        radius="10 2"
                        x="0%"
                        y="0%"
                        width="100%"
                        height="100%"
                        in="SourceGraphic"
                        result="morphology1"
                      ></feMorphology>
                    </filter>
                    <filter
                      id="filter-3"
                      x="-20%"
                      y="-20%"
                      width="350%"
                      height="300%"
                      filterUnits="objectBoundingBox"
                      primitiveUnits="userSpaceOnUse"
                      colorInterpolationFilters="linearRGB"
                    >
                      <feMorphology
                        operator="dilate"
                        radius="15 0"
                        x="0%"
                        y="0%"
                        width="100%"
                        height="100%"
                        in="SourceGraphic"
                        result="morphology1"
                      ></feMorphology>
                    </filter>
                  </defs>
                  {/* <!-- 	go ahead and change the image and make it your own --> */}
                  <image
                    x="0%"
                    y="0%"
                    width="180"
                    height="180"
                    preserveAspectRatio="xMidYMid slice"
                    xlinkHref={SLprofile}
                    id="my-image"
                  ></image>
                </svg>
                <h1 className="m-0 fs-1 fw-bold mb-0">Sherwin Labrador</h1>
                <p className="m-0 fw-bold lh-sm">UI/UX Designer</p>
                <p className="m-0 fw-bold lh-sm">Front-end Web Developer</p>
                <div className="d-flex justify-content-between  mt-2">
                  <a
                    href="http://www.facebook.com/kerzrak"
                    target="_blank"
                    style={{ color: "black", textDecoration: "none" }}
                  >
                    <Facebook className="m-2" size={20} />
                  </a>

                  <a
                    href="https://www.linkedin.com/in/sherwin-labrador-7997a3234"
                    target="_blank"
                    style={{ color: "black", textDecoration: "none" }}
                  >
                    <Linkedin className="m-2" size={20} />
                  </a>

                  <a
                    href="https://github.com/rakerzzz"
                    target="_blank"
                    style={{ color: "black", textDecoration: "none" }}
                  >
                    <Github className="m-2" size={20} />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-sm-12 d-lg-flex align-items-center">
              {/* description */}
              <div className="d-flex flex-column align-items-center mx-4">
                <h3 className="mt-4 fw-bold ">UI/UX Designer</h3>
                <p className="text-center lh-sm ">
                  As a UI/UX Designer, I translate the manual process into
                  Automated Processes by gathering specifications and analyzing
                  them to convert them into a user-friendly interface.
                </p>
                <h3 className="mt-4 fw-bold ">Front-end Web Developer</h3>
                <p className="text-center lh-sm">
                  Converting UI Wireframes into code-based web design pages and
                  applying functionalities with standard and clean code
                  implementations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid bg-white">
        <div className="container skills-container d-flex flex-column align-items-center justify-content-center">
          <div className="d-flex flex-column w-100 text-center px-2 my-4">
            <h1 className="mb-1 fw-bold mt-5">SKILLS</h1>
            <hr className="m-0" />
          </div>
          <div className="container d-flex w-100 justify-content-center align-items-center px-4 mb-3">
            <div className="row gy-3 justify-content-center">
              <div className="col-3 d-flex flex-column justify-content-center align-items-center">
                <h6 className="mb-1">FIGMA</h6>
                <Image
                  src={Figmalogo}
                  style={{ height: "60px" }}
                  className="mb-3"
                ></Image>
              </div>
              <div className="col-3 d-flex flex-column justify-content-center align-items-center">
                <h6 className="mb-1">HTML</h6>
                <Image
                  src={HTMLlogo}
                  style={{ height: "60px" }}
                  className="mb-3"
                ></Image>
              </div>
              <div className="col-3 d-flex flex-column justify-content-center align-items-center">
                <h6 className="mb-1">CSS</h6>
                <Image
                  src={CSSlogo}
                  style={{ height: "60px" }}
                  className="mb-3"
                ></Image>
              </div>
              <div className="col-3 d-flex flex-column justify-content-center align-items-center">
                <h6 className="mb-1" style={{ fontSize: ".8rem" }}>
                  JAVASCRIPT
                </h6>
                <Image
                  src={JSlogo}
                  style={{ height: "60px" }}
                  className="mb-3"
                ></Image>
              </div>
              <div className="col-3 d-flex flex-column justify-content-center align-items-center">
                <h6 className="mb-1" style={{ fontSize: ".9rem" }}>
                  MONGODB
                </h6>
                <Image
                  src={MongoDBlogo}
                  style={{ height: "60px" }}
                  className="mb-3"
                ></Image>
              </div>
              <div className="col-3 d-flex flex-column justify-content-center align-items-center">
                <h6 className="mb-1" style={{ fontSize: ".9rem" }}>
                  EXPRESSJS
                </h6>
                <Image
                  src={Expressjslogo}
                  style={{ height: "60px" }}
                  className="mb-3"
                ></Image>
              </div>
              <div className="col-3 d-flex flex-column justify-content-center align-items-center">
                <h6 className="mb-1" style={{ fontSize: ".9rem" }}>
                  REACTJS
                </h6>
                <Image
                  src={Reactjslogo}
                  style={{ height: "60px" }}
                  className="mb-3"
                ></Image>
              </div>
              <div className="col-3 d-flex flex-column justify-content-center align-items-center">
                <h6 className="mb-1" style={{ fontSize: ".9rem" }}>
                  NODEJS
                </h6>
                <Image
                  src={Nodejslogo}
                  style={{ height: "60px" }}
                  className="mb-3"
                ></Image>
              </div>
              <div className="col-3 px-0 d-flex flex-column justify-content-center align-items-center">
                <h6
                  className="mb-1 text-center fw-bolder"
                  style={{ fontSize: ".7rem" }}
                >
                  DIGITAL OCEAN
                </h6>
                <Image
                  src={DigitalOceanlogo}
                  style={{ height: "60px" }}
                  className="mb-3"
                ></Image>
              </div>
              <div className="col-3 d-flex flex-column justify-content-center align-items-center">
                <h6 className="mb-1" style={{ fontSize: ".9rem" }}>
                  GITHUB
                </h6>
                <Image
                  src={Githublogo}
                  style={{ height: "60px" }}
                  className="mb-3"
                ></Image>
              </div>
            </div>
          </div>
          <div className="d-flex flex-column w-100 text-center px-4 my-3 mb-5">
            <h1 className="mb-1 fw-bold">Description of My Skills</h1>
            <p className="lh-sm">
              My Technology Stack Skill is also my road map for being a web
              developer to create web applications as a web developer I started
              in wireframing on how the system or application works based on the
              client's specifications it's like making a blueprint of a house
              for building it.
            </p>
            <p className="lh-sm">
              Then jumping to coding process using MERN Stack Technology. And
              using GitHub for version control and collaborating with other
              developers to manage our project code repositories every progress
              of our work are stored in GitHub.
            </p>
            <p className="lh-sm">
              Finally, Digital Ocean Technology will host the web application to
              access the system internationally. There is a lot of technology
              out there to build a better web application but for now this is my
              fundamentals skills for building a web application and not
              stopping to strive to learn more.
            </p>
          </div>
        </div>
      </div>

      <div className="container-fluid bg-light projects-parent-container">
        <div className="container projects-container bg-light d-flex flex-column align-items-center justify-content-center">
          <div className="d-flex flex-column w-100 text-center px-2 my-4">
            <h1 className="mb-1 fw-bold mt-5 mt-lg-0">PROJECTS</h1>
            <hr className="m-0" />
          </div>
          <div className="row">
            <div className="col-lg-6 col-sm-12">
              {/* mercantile */}
              <Card className="mb-4 border-secondary" style={{ width: "100%" }}>
                <div
                  className="position-relative overflow-hidden"
                  style={Object.assign({}, containerStyles, {
                    backgroundImage: `url(${Mercantilbanner})`,
                  })}
                >
                  <Button
                    className="position-absolute bottom-0 end-0 mb-1 me-2 py-0 px-3"
                    variant="dark"
                    size="sm"
                    onClick={() => handleClick("mecantileImages")}
                  >
                    View Details
                  </Button>
                </div>
                <Card.Body>
                  <Card.Title className="fw-bold text-truncate">
                    MERCANTILE TRAVEL INSURANCE
                  </Card.Title>
                  <Card.Text className="lh-sm project-ellipsis">
                    Web Application for applying for travel insurance with a
                    paperless process and making payments online with
                    notification thru email.
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
            <div className="col-lg-6 col-sm-12">
              {/* figaro */}
              <Card className="mb-4 border-secondary" style={{ width: "100%" }}>
                <div
                  className="position-relative overflow-hidden"
                  style={Object.assign({}, containerStyles, {
                    backgroundImage: `url(${Figarobanner})`,
                  })}
                >
                  <Button
                    className="position-absolute bottom-0 end-0 mb-1 me-2 py-0 px-3"
                    variant="dark"
                    size="sm"
                    onClick={() => handleClick("figaroImages")}
                  >
                    View Details
                  </Button>
                </div>
                <Card.Body>
                  <Card.Title className="fw-bold">
                    FIGARO iMANAGE SYSTEM
                  </Card.Title>
                  <Card.Text className="lh-sm project-ellipsis">
                    Ticketing System for store issues and Online Chat Support
                    for the employees of the company, soon adding a module for
                    e-learning system.
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
            <div className="col-lg-6 col-sm-12">
              {/* jsa */}
              <Card className="mb-4 border-secondary" style={{ width: "100%" }}>
                <div
                  className="position-relative overflow-hidden"
                  style={Object.assign({}, containerStyles, {
                    backgroundImage: `url(${JapanSushibanner})`,
                  })}
                >
                  <Button
                    className="position-absolute bottom-0 end-0 mb-1 me-2 py-0 px-3"
                    variant="dark"
                    size="sm"
                    onClick={() => handleClick("jsaImages")}
                  >
                    View Details
                  </Button>
                </div>
                <Card.Body>
                  <Card.Title className="fw-bold">
                    JAPAN SUSHI ACADEMY
                  </Card.Title>
                  <Card.Text className="lh-sm project-ellipsis">
                    Student management system for candidates who wants to be
                    sushi chef. and e-learning modules to train the student
                    online by watching tutorial videos also has a restaurant
                    management system for training a student hands-on.
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
            <div className="col-lg-6 col-sm-12">
              {/* nq-inventory */}
              <Card className="mb-4 border-secondary" style={{ width: "100%" }}>
                <div
                  className="position-relative overflow-hidden"
                  style={Object.assign({}, containerStyles, {
                    backgroundImage: `url(${NQinventorybanner})`,
                  })}
                >
                  <Button
                    className="position-absolute bottom-0 end-0 mb-1 me-2 py-0 px-3"
                    variant="dark"
                    size="sm"
                    onClick={() => handleClick("nqinventoryImages")}
                  >
                    View Details
                  </Button>
                </div>
                <Card.Body>
                  <Card.Title className="fw-bold">
                    NQ-INVENTORY SYSTEM
                  </Card.Title>
                  <Card.Text className="lh-sm project-ellipsis">
                    use to manage and track the flow of goods, raw materials,
                    and finished products. The purpose of an inventory system is
                    to ensure that a company has the right amount of stock on
                    hand to meet customer demand and to minimize excess
                    inventory costs.
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid bg-white">
        <div className="container bg-white d-flex flex-column align-items-center justify-content-center">
          {/* header */}
          <div
            className="d-flex aboutme-header flex-column text-center px-2 my-4"
            style={{ width: "100%" }}
          >
            <h1 className="mb-1 fw-bold mt-5">ABOUT ME</h1>
            <hr className="m-0" />
          </div>
          <div className="row">
            <div className="col-lg-6 col-sm-12">
              {/* description */}
              <div className="d-flex flex-column w-100 align-items-center text-center px-4 my-3">
                <h1 className="mb-1 fw-bold">Web Developer Journey</h1>
                <p className="lh-sm">
                  I started as a trainee in a start-up company called MWeeb I
                  focused on the fundamentals of how to be a front-end web
                  developer for two months, the three fundamentals that I study
                  are HTML, CSS, and JAVASCRIPT.
                </p>
                <p className="lh-sm">
                  While learning the fundamentals I used to join on the client's
                  meeting to gather and analyze the specification of the web
                  application system that they need, and started to learn the
                  wireframing process to translate the specification into UI/UX
                  using FIGMA then converting it into code using HTML CSS later
                  on I used CSS framework called bootstrap and it helps me to
                  work efficiently and increase productivity using bootstrap.
                </p>
                <p className="lh-sm">
                  Then later on they introduce me to code on React using MERN
                  Technology and Model View Presenter(MVP) architectural pattern
                  for clean, readable, and maintainable code. At that time, they
                  also taught me to use GitHub for version controlling and
                  collaborating with other developers in the company.
                </p>
                <p className="lh-sm">
                  Most of my tasks are in wireframing and coding a UI into react
                  app, sometimes they let me study how to use API and fetch the
                  data to build scalable and flexible UI so when I turn over to
                  the backend team it will take less time to work on it.
                </p>
                <p className="lh-sm">
                  I have something more to learn, the software industry
                  environment is so huge, and my eagerness to learn more is
                  exciting for me to explore more technology in web development,
                  lastly for me, health is wealth in taking care of my mental
                  health and physical body is important and choosing a good
                  environment in work will maintain my good health and peace of
                  mind.
                </p>
                <a
                  href="https://drive.google.com/uc?export=download&id=1-J_A7k2MxmsUKE0I4qAlhr-5_XKpN_QZ"
                  class="btn btn-dark d-lg-none"
                  role="button"
                  style={{ width: "50%" }}
                >
                  DOWNLOAD CV
                </a>
              </div>
            </div>
            <div className="col-lg-6 col-sm-12">
              {/* image */}
              <div className="d-flex flex-column align-items-center mt-5">
                <Image
                  src={Aboutmepicture}
                  style={{ width: "87%" }}
                  className="mb-3"
                ></Image>
                <a
                  href="https://drive.google.com/uc?export=download&id=1c8C7_LF3Le0VhHucPUDZ4uw3BuPE-v5P"
                  class="btn btn-dark d-none d-lg-block mt-5"
                  role="button"
                  style={{ width: "50%" }}
                >
                  DOWNLOAD CV
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid bg-light">
        <div className="container bg-light d-flex flex-column align-items-center justify-content-center">
          <div
            className="d-flex flex-column contactme-header text-center px-2 my-4 mb-lg-5"
            style={{ width: "100%" }}
          >
            <h1 className="mb-1 fw-bold mt-5">CONTACT ME</h1>
            <hr className="m-0" />
          </div>
          <div className="row mb-lg-5">
            <div className="col-lg-6 col-sm-12 custom-border-end">
              <Form className="w-100 d-flex flex-column px-4 mb-4">
                <div className="d-flex flex-column w-100 mb-3">
                  <h1 className="mb-1 fw-bold">Get In Touch</h1>
                  <p className="mb-1 ">I’m here for you, how can I help?</p>
                </div>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>Enter Fullname</Form.Label>
                  <Form.Control type="string" placeholder="ex. Justin Dieber" />
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput2"
                >
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="email@gmail.com" />
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlTextarea1"
                >
                  <Form.Label>Message</Form.Label>
                  <Form.Control as="textarea" rows={3} />
                </Form.Group>
                <Button
                  variant="dark"
                  className="w-50 mx-auto mt-3"
                  onClick={() => setModalShow2(true)}
                >
                  Submit
                </Button>
              </Form>
            </div>
            <div className="col-lg-6 col-sm-12">
              <div className="d-flex flex-column px-4 w-100 mt-4 mt-lg-0 mb-5">
                <h1 className="mb-1 fw-bold mb-lg-4">Contact Info</h1>
                <div className="row justify-content-center mt-2 mb-4">
                  {/* logo x name */}
                  <div className="col-6 d-flex align-items-center justify-content-end border-end border-2 border-dark">
                    <Image src={SLlogo} style={{ height: "50px" }}></Image>
                    <div className="d-flex flex-column ms-2">
                      <div className="lh-1 fw-bold">Sherwin</div>
                      <div className="lh-1 fw-bold">Labrador</div>
                    </div>
                  </div>
                  {/* position 1 & 2 */}
                  <div className="col-6 d-flex flex-column justify-content-center">
                    <div
                      className="lh-sm fw-bold"
                      style={{ fontSize: ".8rem" }}
                    >
                      UI/UX Designer
                    </div>
                    <div
                      className="lh-sm fw-bold text-nowrap"
                      style={{ fontSize: ".8rem" }}
                    >
                      Front-end Web Developer
                    </div>
                  </div>
                </div>
                <div className="d-flex align-items-start mb-4">
                  <GeoAlt className="me-4 " size={40} />
                  <div>
                    304 Urban Loft Plainview Fabella St, Mandaluyong City, Metro
                    Manila, 0960
                  </div>
                </div>
                <div className="d-flex align-items-center mb-4">
                  <Telephone className="me-4 " size={20} />
                  <div>+63 915 1130 899</div>
                </div>
                <div className="d-flex align-items-center mb-4">
                  <Envelope className="me-4" size={20} />
                  <div>labradorsherwinreyes@gmail.com</div>
                </div>
                <div className="d-flex justify-content-center ">
                  <a
                    href="http://www.facebook.com/kerzrak"
                    target="_blank"
                    style={{ color: "black", textDecoration: "none" }}
                  >
                    <Facebook className="m-2" size={30} />
                  </a>

                  <a
                    href="https://www.linkedin.com/in/sherwin-labrador-7997a3234"
                    target="_blank"
                    style={{ color: "black", textDecoration: "none" }}
                  >
                    <Linkedin className="m-2" size={30} />
                  </a>

                  <a
                    href="https://github.com/rakerzzz"
                    target="_blank"
                    style={{ color: "black", textDecoration: "none" }}
                  >
                    <Github className="m-2" size={30} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
