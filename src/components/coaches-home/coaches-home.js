import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import SectionTitle from "../section-title/section-title"
import SquareContainer from "../square-container/square-container"
import Video from "../video/video"
import LinkSection from "../link-section/link-section"

import "./coaches-home.scss"

const CoachesHome = () => (
  <div id="coaches" className="coaches-home">
    <Container>
      <Row>
        <Col lg={12}>
          <SectionTitle
            title="coaches"
            description="our coaches."
            subDescription="take your "
            span="pick"
          />
        </Col>
      </Row>
    </Container>
    <Video
      videoSrcUrl="https://www.youtube.com/embed/gbJDNy9cKDc?&playlist=gbJDNy9cKDc&autoplay=1&showinfo=0&controls=0&loop=1&modestbranding=1&playsinline=1&rel=0&showinfo=0&fs=0&mute=1"
      videoTitle="placeholder video"
    />
    <SquareContainer />
    <Container>
      <Row>
        <Col xs={12} md={{ span: 6, offset: 3 }}>
          <LinkSection
            linkSectionTitle="We have many more coaches as well. We'd love to show you the rest."
            buttonTitle="Contact us about coaches"
            linkPath="/contact"
            textAlign="text-align-center"
          />
        </Col>
      </Row>
    </Container>
  </div>
)

export default CoachesHome
