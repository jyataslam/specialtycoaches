import React from "react"
import { Link } from "gatsby"

import { Container, Row, Col } from "react-bootstrap"

import "./footer.scss"

const Footer = ({ siteTitle }) => {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col sm={6}>
            <h3>{siteTitle}</h3>
          </Col>
        </Row>
        <Row>
          <Col sm={12}>
            <p className="copyright">{`© ${new Date().getFullYear()} ${siteTitle}`}</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer
