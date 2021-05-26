import React from "react"
import { Link } from "gatsby"
import { AnchorLink } from "gatsby-plugin-anchor-links"
import { Container, Row, Col } from "react-bootstrap"

import navLinks from "../../data/links"

import "./top-nav.scss"

const TopNav = () => {
  return (
    <div className="top-nav">
      <Container>
        <Row>
          <Col xs={12}>
            <div className="links-container">
              {navLinks.map((link, index) => (
                <AnchorLink to={link.hash} key={index}>
                  {link.title}
                </AnchorLink>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default TopNav
