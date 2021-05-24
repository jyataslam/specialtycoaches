import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import SectionTitle from "../section-title/section-title"
import SquareContainer from "../square-container/square-container"

import "./coaches-home.scss"

const CoachesHome = () => (
  <div className="coaches-home">
    <Container>
      <Row>
        <Col lg={12}>
          <SectionTitle
            title="coaches"
            description="Our Current Selection Of Coaches"
          />
        </Col>
      </Row>
    </Container>
    <SquareContainer />
  </div>
)

export default CoachesHome
