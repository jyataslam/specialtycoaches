import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { Container, Row, Col } from "react-bootstrap"

import "./hero.scss"

const Hero = () => {
  return (
    <div className="hero flex justify-content-center align-items-flex-start">
      {/* <StaticImage
        src="../../images/hero.jpg"
        alt="steely dan coach"
        placeholder="blurred"
        layout="fixed"
      /> */}
      <Container>
        <Row>
          <Col md={12}>
            <h1>SPECIALTY COACHES</h1>
            <StaticImage
              src="../../images/bus-crop.jpg"
              alt="tour bus"
              placeholder="blurred"
            />
            <h4>
              Transportation At Its <span>Finest.</span>
            </h4>
          </Col>
          <Col md={{ span: 8, offset: 2 }}>
            <h4 className="sub-desc">
              Established in 2014 by veterans of the touring world to provide a
              top of the line coach option based in the greater Los Angeles
              area.
            </h4>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Hero
