import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { Container, Row, Col } from "react-bootstrap"
import { Spin as Hamburger } from "hamburger-react"
import { AnchorLink } from "gatsby-plugin-anchor-links"

import Sidenav from "../sidenav/sidenav"

import "./header.scss"

const Header = ({ siteTitle }) => {
  const [isOpen, setOpen] = useState(false)
  const [sticky, setSticky] = useState(false)

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setSticky(true)
    } else if (window.scrollY < 100) {
      setSticky(false)
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [sticky])

  return (
    <>
      <header className={`header ${isOpen ? "isOpen" : ""}`}>
        <Container>
          <Row>
            <Col xs={6} className="flex align-items-center">
              <AnchorLink to="/">
                <h4>{siteTitle}</h4>
              </AnchorLink>
            </Col>
            <Col xs={6} className="flex justify-content-flex-end">
              <Link to="/contact" className="button">
                contact us
              </Link>
              {isOpen ? (
                <Hamburger
                  toggled={isOpen}
                  toggle={setOpen}
                  direction="left"
                  label="Display Nav Menu"
                  hideOutline={true}
                  rounded
                  duration={0.5}
                />
              ) : (
                <Hamburger
                  toggled={isOpen}
                  toggle={setOpen}
                  direction="left"
                  label="Display Nav Menu"
                  hideOutline={true}
                  rounded
                  duration={0.5}
                  color="#000"
                />
              )}
            </Col>
          </Row>
        </Container>
      </header>
      <Sidenav isOpen={isOpen} siteTitle={siteTitle} />
    </>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
