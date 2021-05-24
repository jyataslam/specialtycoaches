import React from "react"
import { Link } from "gatsby"
import { Container, Row, Col } from "react-bootstrap"

import navLinks from "../../data/links"

import "./sidenav.scss"

const Sidenav = ({ isOpen, siteTitle }) => {
  return (
    <div className={`sidenav ${isOpen ? "isOpen" : ""}`}>
      <Container style={{ height: "100%" }}>
        <Row style={{ height: "100%" }}>
          <Col
            xs={12}
            style={{
              height: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {navLinks.map(link => (
              <Link to={link.path} className="link">
                {link.title}
              </Link>
            ))}
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Sidenav
