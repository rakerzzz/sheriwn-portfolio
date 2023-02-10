// import Button from "react-bootstrap/Button";
import { Button, Image, Card, Form } from "react-bootstrap";
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
  return (
    <main className="vh-100 bg-secondary overflow-auto">
      <div className="container h-100 bg-light d-flex flex-column align-items-center justify-content-center pb-4">
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
            <Facebook className="m-2" size={20} />
            <Linkedin className="m-2" size={20} />
            <Github className="m-2" size={20} />
          </div>
        </div>
        {/* description */}
        <div className="d-flex flex-column align-items-center mx-4">
          <h3 className="mt-4 fw-bold">UI/UX Designer</h3>
          <p className="text-center lh-sm">
            As a UI/UX Designer I translate the manual process into Automated
            Process through gathering specification and analyze it to convert
            into user-friendly interface.
          </p>

          <h3 className="mt-4 fw-bold">Front-end Web Developer</h3>
          <p className="text-center lh-sm">
            Converting UI Wireframes into web design pages and applying
            functionalities with standard and clean code implementations.
          </p>
        </div>
      </div>
      <div className="container  h-100 bg-white d-flex flex-column align-items-center justify-content-center fw-bold">
        <div className="d-flex flex-column w-100 text-center px-2 mb-4">
          <h1 className="mb-1 fw-bold">SKILLS</h1>
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
              <h6 className="mb-1 text-center" style={{ fontSize: ".7rem" }}>
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

        <div className="d-flex flex-column w-100 text-center px-4 my-3">
          <h1 className="mb-1 fw-bold">Description about my skill</h1>
          <p className="lh-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis,
            nam est! Reiciendis, neque accusantium porro ipsam aliquid soluta
            obcaecati necessitatibus? Lorem ipsum dolor sit amet. Lorem ipsum
            dolor sit amet.
          </p>
        </div>
      </div>
      <div className="container bg-light d-flex flex-column align-items-center justify-content-center">
        <div className="d-flex flex-column w-100 text-center px-2 my-4">
          <h1 className="mb-1 fw-bold">PROJECTS</h1>
          <hr className="m-0" />
        </div>

        <div className="container mb-4">
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
              >
                View Details
              </Button>
            </div>

            <Card.Body>
              <Card.Title className="fw-bold">
                MERCANTILE TRAVEL INSURANCE
              </Card.Title>
              <Card.Text className="lh-sm">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>

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
              >
                View Details
              </Button>
            </div>

            <Card.Body>
              <Card.Title className="fw-bold">FIGARO iMANAGE SYSTEM</Card.Title>
              <Card.Text className="lh-sm">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>

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
              >
                View Details
              </Button>
            </div>

            <Card.Body>
              <Card.Title className="fw-bold">JAPAN SUSHI ACADEMY</Card.Title>
              <Card.Text className="lh-sm">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>

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
              >
                View Details
              </Button>
            </div>

            <Card.Body>
              <Card.Title className="fw-bold">NQ-INVENTORY SYSTEM</Card.Title>
              <Card.Text className="lh-sm">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>
      <div className="container h-100 bg-white d-flex flex-column align-items-center justify-content-center">
        <div className="d-flex flex-column w-100 text-center px-2 my-4">
          <h1 className="mb-1 fw-bold">ABOUT ME</h1>
          <hr className="m-0" />
        </div>

        <div className="d-flex flex-column w-100 align-items-center text-center px-4 my-3">
          <h1 className="mb-1 fw-bold">Description about my skill</h1>
          <p className="lh-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis,
            nam est! Reiciendis, neque accusantium porro ipsam aliquid soluta
            obcaecati necessitatibus? Lorem ipsum dolor sit amet. Lorem ipsum
            dolor sit amet.
          </p>
          <Button className="mt-3" variant="dark" style={{ width: "50%" }}>
            DOWNLOAD CV
          </Button>
        </div>

        <div className="d-flex flex-column align-items-center mt-5">
          <Image
            src={Aboutmepicture}
            style={{ width: "100%" }}
            className="mb-3"
          ></Image>
        </div>
      </div>
      <div className="container bg-light d-flex flex-column align-items-center justify-content-center">
        <div className="d-flex flex-column w-100 text-center px-2 my-4">
          <h1 className="mb-1 fw-bold">CONTACT ME</h1>
          <hr className="m-0" />
        </div>

        <Form className="w-100 d-flex flex-column px-4 mb-4">
          <div className="d-flex flex-column w-100 mb-3">
            <h1 className="mb-1 fw-bold">Get In Touch</h1>
            <p className="mb-1 ">I’m here for you, how can I help?</p>
          </div>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Enter Fullname</Form.Label>
            <Form.Control type="string" placeholder="ex. John Doe" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="name@example.com" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Example textarea</Form.Label>
            <Form.Control as="textarea" rows={3} />
          </Form.Group>

          <Button variant="dark" className="w-50 mx-auto mt-3">
            Submit
          </Button>
        </Form>

        <div className="d-flex flex-column px-4 w-100 my-4">
          <h1 className="mb-1 fw-bold">Contact Info</h1>
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
              <div className="lh-sm fw-bold" style={{ fontSize: ".8rem" }}>
                UI/UX Designer
              </div>
              <div className="lh-sm fw-bold" style={{ fontSize: ".8rem" }}>
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

          <div className="d-flex justify-content-center  mb-3">
            <Facebook className="m-2" size={30} />
            <Linkedin className="m-2" size={30} />
            <Github className="m-2" size={30} />
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
