import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import { StaticImage } from "gatsby-plugin-image"

import "./about-home.scss"

const AboutHome = () => {
  return (
    <div id="about" className="about-home">
      <StaticImage
        src="../../images/hero.jpg"
        alt="steely dan coach"
        placeholder="blurred"
      />
      <Container>
        <Row>
          <Col xs={12}>
            <div className="about-text-container">
              <h1>About Specialty Coaches</h1>
              <h4>
                Specialty Coaches was established in 2014 by veterans of the
                touring world to provide a top of the line coach option based in
                the greater Los Angeles area. Through our growth we have
                received warm welcome to many who look to begin and end their
                tours in Southern California.
              </h4>
              <h4>
                We pride ourselves in comfort and safety. All drivers adhere to
                all DOT regulations, are randomly drug tested and are willing to
                provide a top level of service. We are fully insured and DOT
                compliant.
              </h4>
              <h4>
                We strive to provide a quality product and we will do what it
                takes to provide our clients with a comfortable ride and a fully
                functional vehicle. We are always upgrading our equipment and
                make adjustments based on suggestions of our clients.
              </h4>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default AboutHome
