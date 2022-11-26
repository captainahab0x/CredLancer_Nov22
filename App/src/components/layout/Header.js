import React from "react";
import NavLink from "../Common/NavLink";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
// import { Button } from "react-bootstrap";
// import { ConnectButton } from "@rainbow-me/rainbowkit";
import Wallet from "../Wallet";
import "./header.css";

const Header = () => {

  return (
    <>
      <Container fluid className='header-container'>
        <div className="cover">
          <svg className="full-width"
            width="1843"
            height="817"
            viewBox="0 0 1843 817"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <ellipse
              cx="128"
              cy="198.054"
              rx="5"
              ry="5.9373"
              fill="white"
              fillOpacity="0.15"
            />
            <ellipse
              cx="5"
              cy="236.052"
              rx="5"
              ry="5.9373"
              fill="white"
              fillOpacity="0.3"
            />
            <ellipse
              cx="29"
              cy="264.551"
              rx="5"
              ry="5.9373"
              fill="white"
              fillOpacity="0.08"
            />
            <ellipse
              cx="118"
              cy="409.421"
              rx="5"
              ry="5.9373"
              fill="white"
              fillOpacity="0.3"
            />
            <ellipse
              cx="15"
              cy="512.73"
              rx="5"
              ry="5.9373"
              fill="white"
              fillOpacity="0.1"
            />
            <ellipse
              cx="67"
              cy="768.034"
              rx="5"
              ry="5.9373"
              fill="white"
              fillOpacity="0.3"
            />
            <ellipse
              cx="329"
              cy="607.726"
              rx="5"
              ry="5.9373"
              fill="white"
              fillOpacity="0.3"
            />
            <ellipse
              cx="403"
              cy="756.159"
              rx="5"
              ry="5.9373"
              fill="white"
              fillOpacity="0.08"
            />
            <ellipse
              cx="888"
              cy="694.412"
              rx="5"
              ry="5.9373"
              fill="white"
              fillOpacity="0.08"
            />
            <ellipse
              cx="474"
              cy="518.668"
              rx="5"
              ry="5.9373"
              fill="white"
              fillOpacity="0.1"
            />
            <ellipse
              cx="578"
              cy="643.35"
              rx="5"
              ry="5.9373"
              fill="white"
              fillOpacity="0.3"
            />
            <ellipse
              cx="222"
              cy="137.493"
              rx="5"
              ry="5.9373"
              fill="white"
              fillOpacity="0.3"
            />
            <ellipse
              cx="780"
              cy="182.616"
              rx="5"
              ry="5.9373"
              fill="white"
              fillOpacity="0.3"
            />
            <ellipse
              cx="846"
              cy="377.359"
              rx="5"
              ry="5.9373"
              fill="white"
              fillOpacity="0.1"
            />
            <ellipse
              cx="903"
              cy="76.9324"
              rx="5"
              ry="5.9373"
              fill="white"
              fillOpacity="0.05"
            />
            <ellipse
              cx="217"
              cy="270.488"
              rx="5"
              ry="5.9373"
              fill="white"
              fillOpacity="0.3"
            />
            <ellipse
              cx="1722"
              cy="250.251"
              rx="5"
              ry="5.9373"
              fill="white"
              fillOpacity="0.3"
            />
            <ellipse
              cx="1803"
              cy="432.883"
              rx="5"
              ry="5.9373"
              fill="white"
              fillOpacity="0.8"
            />
            <ellipse
              cx="1694"
              cy="555.018"
              rx="5"
              ry="5.9373"
              fill="white"
              fillOpacity="0.1"
            />
            <ellipse
              cx="1369"
              cy="776.46"
              rx="5"
              ry="5.9373"
              fill="white"
              fillOpacity="0.3"
            />
            <ellipse
              cx="1609"
              cy="774.178"
              rx="5"
              ry="5.9373"
              fill="white"
              fillOpacity="0.3"
            />
            <ellipse
              cx="1823"
              cy="774.178"
              rx="5"
              ry="5.9373"
              fill="white"
              fillOpacity="0.3"
            />
            <ellipse
              cx="1813"
              cy="5.98027"
              rx="5"
              ry="5.9373"
              fill="white"
              fillOpacity="0.3"
            />
            <ellipse
              cx="1572"
              cy="473.544"
              rx="5"
              ry="5.9373"
              fill="white"
              fillOpacity="0.3"
            />
            <ellipse
              cx="1416"
              cy="88.8064"
              rx="5"
              ry="5.9373"
              fill="white"
              fillOpacity="0.3"
            />
            <ellipse
              cx="334"
              cy="203.99"
              rx="5"
              ry="5.9373"
              fill="white"
              fillOpacity="0.08"
            />
            <ellipse
              cx="528"
              cy="82.8699"
              rx="5"
              ry="5.9373"
              fill="white"
              fillOpacity="0.1"
            />
            <path
              d="M907.654 362.516L917.5 350.824L927.346 362.516L917.5 374.208L907.654 362.516Z"
              stroke="#E1E1E1"
            />
            <path
              d="M1013.65 712.817L1023.5 701.125L1033.35 712.817L1023.5 724.509L1013.65 712.817Z"
              stroke="#E1E1E1"
            />
            <path
              d="M1453.65 778.425L1463.5 766.733L1473.35 778.425L1463.5 790.117L1453.65 778.425Z"
              stroke="#E1E1E1"
            />
            <path
              d="M1609.65 534.155L1619.5 522.463L1629.35 534.155L1619.5 545.847L1609.65 534.155Z"
              stroke="#E1E1E1"
            />
            <path
              d="M1720.65 803.537L1730.5 791.845L1740.35 803.537L1730.5 815.229L1720.65 803.537Z"
              stroke="#E1E1E1"
            />
            <path
              d="M1779.65 569.54L1789.5 557.848L1799.35 569.54L1789.5 581.232L1779.65 569.54Z"
              stroke="#E1E1E1"
              strokeOpacity="0.2"
            />
            <path
              d="M1789.65 151.768L1799.5 140.076L1809.35 151.768L1799.5 163.46L1789.65 151.768Z"
              stroke="#E1E1E1"
              strokeOpacity="0.5"
            />
            <line
              y1="-0.5"
              x2="26.3914"
              y2="-0.5"
              transform="matrix(-0.644148 0.764901 -0.644148 -0.764901 787 569.729)"
              stroke="#C7C7C7"
            />
            <line
              y1="-0.5"
              x2="26.3914"
              y2="-0.5"
              transform="matrix(-0.644148 0.764901 -0.644148 -0.764901 1618 707.743)"
              stroke="#C7C7C7"
            />
            <line
              y1="-0.5"
              x2="26.3914"
              y2="-0.5"
              transform="matrix(-0.644148 0.764901 -0.644148 -0.764901 1842 786.503)"
              stroke="#C7C7C7"
            />
            <line
              y1="-0.5"
              x2="26.3914"
              y2="-0.5"
              transform="matrix(-0.644148 0.764901 -0.644148 -0.764901 1805 700.895)"
              stroke="#C7C7C7"
            />
            <line
              y1="-0.5"
              x2="26.3914"
              y2="-0.5"
              transform="matrix(-0.644148 0.764901 -0.644148 -0.764901 1693 372.156)"
              stroke="#C7C7C7"
              strokeOpacity="0.2"
            />
            <line
              y1="-0.5"
              x2="26.3914"
              y2="-0.5"
              transform="matrix(-0.644148 0.764901 -0.644148 -0.764901 1706 41.1357)"
              stroke="#C7C7C7"
            />
            <line
              y1="-0.5"
              x2="26.3914"
              y2="-0.5"
              transform="matrix(-0.644148 0.764901 -0.644148 -0.764901 1193 784.221)"
              stroke="#C7C7C7"
            />
            <line
              y1="-0.5"
              x2="26.3914"
              y2="-0.5"
              transform="matrix(-0.644148 0.764901 -0.644148 -0.764901 1051 70.9951)"
              stroke="#C7C7C7"
            />
          </svg>
        </div>
        <div className="header">
          <div className="header d-block">
            <div className="nav-bar d-flex">
              <div className="logo">
                <img src="./assets/images/logo.png" alt="logo" />
              </div>
              <Row className="nav-btn-group v-center">
                <Col>
                  <NavLink to="/">HOME</NavLink>
                </Col>
                <Col>
                  <NavLink to="/about">ABOUT</NavLink>
                </Col>
                <Col>
                  <NavLink to="/services">SERVICES</NavLink>
                </Col>
                <Col>
                  <NavLink to="/portfolio">PORTFOLIO</NavLink>
                </Col>
                <Col>
                  <NavLink to="/organization">ORGANIZATION</NavLink>
                </Col>
                <Col>
                  <NavLink to="/freelancer">FREELANCER</NavLink>
                </Col>
                <Col>
                  <Wallet />
                </Col>
              </Row>
            </div>
            <div className="content perfect-center">
              <div className="d-block">

                <Row className="justify-content-md-center main-title-container perfect-center mt-5">
                  <h1 className="main-title">Collaborate with Verified Pros</h1>
                </Row>
                <Row className="justify-content-md-center perfect-center">
                  <Col xs lg="9">
                    <h1 className="main-subtitle">Onboard your Tribe &
                      Find Pro FreeLacers</h1>
                  </Col>
                </Row>

                <Row>
                  <div className="full-width h-center mt-2">
                    <div className="search-box perfect-center">
                      <input className="search-box-input" placeholder="Search for Solutions" />
                    </div>
                  </div>
                </Row>

              </div>
            </div>
          </div>
        </div>
      </Container >
    </>
  );
};

export default Header;
