import React from "react"
import { Container, Row, Col } from "react-bootstrap"

import TitleWithDescription from "../title-with-description/title-with-description"
import FullSizedImage from "../full-sized-image/full-sized-image"
import LinkSection from "../link-section/link-section"

import "./services-home.scss"

const ServicesHome = ({
  backgroundColor,
  colorfulTitle,
  color,
  regularTitle,
  description,
  linkSection,
  imageSrc,
  imageAlt,
}) => {
  return (
    <>
      <section id="services" className={`services-home ${backgroundColor}`}>
        <Container>
          <Row>
            <Col xs={12} md={6}>
              <TitleWithDescription
                colorfulTitle={colorfulTitle}
                color={color}
                regularTitle={regularTitle}
                description={description}
              />
            </Col>
            <Col xs={12} md={{ span: 5, offset: 1 }}>
              <FullSizedImage fileName={imageSrc} alt={imageAlt} />
            </Col>
            <Col xs={12}>
              {linkSection ? (
                <LinkSection
                  linkSectionTitle="Our services extend far beyond just these."
                  buttonTitle="Ask about our full range of services"
                  linkPath="/contact"
                  textAlign="text-align-center"
                />
              ) : null}
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}

export default ServicesHome
