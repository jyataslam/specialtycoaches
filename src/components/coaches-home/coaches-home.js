import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import SectionTitle from "../section-title/section-title"
import SquareContainer from "../square-container/square-container"
import Video from "../video/video"

import "./coaches-home.scss"

const CoachesHome = () => (
  <div className="coaches-home">
    <Container>
      <Row>
        <Col lg={12}>
          <SectionTitle title="coaches" description="our coaches." />
        </Col>
      </Row>
    </Container>
    <Video
      videoSrcUrl="https://www.youtube.com/embed/gbJDNy9cKDc?&playlist=gbJDNy9cKDc&autoplay=1&showinfo=0&controls=0&loop=1&modestbranding=1&playsinline=1&rel=0&showinfo=0&fs=0&mute=1"
      videoTitle="placeholder video"
    />
    <SquareContainer />
  </div>
)

export default CoachesHome
