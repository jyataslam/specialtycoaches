import React from "react"
import { Container, Row, Col } from "react-bootstrap"

import SectionTitle from "../section-title/section-title"
import LinkSection from "../link-section/link-section"
import ServiceCard from "../service-card/service-card"

import "./services-home.scss"

const ServicesHome = () => {
  return (
    <>
      <section id="services" className="services-home">
        <Container>
          <Row>
            <Col xs={12}>
              <SectionTitle
                title="services"
                description="Featured services that we offer."
                textAlign="text-align-center"
              />
            </Col>
          </Row>
        </Container>
        <Container className="container-large">
          <Row>
            <ServiceCard
              backgroundColor="bg-white"
              colorfulTitle="Concert Touring."
              color="color-orange"
              cardBgColor="bg-black"
              textColor="color-white"
              regularTitle="Traveling Your Way."
              description="Whether you need a band bus, crew bus, or star coach, we're just a call away."
              imageSrc="touring.jpg"
              imageAlt="steely dan coach"
            />
            <ServiceCard
              backgroundColor="bg-light-grey"
              colorfulTitle="Corporate Events."
              color="color-dark-blue"
              cardBgColor="bg-white"
              regularTitle="For Any Situation."
              description="We're well versed in thinking outside the box. We can provide a solution for your special event or corporate tour including vehicle wrapping."
              imageSrc="events.jpg"
              imageAlt="coach interior"
            />
            <ServiceCard
              backgroundColor="bg-light-grey"
              colorfulTitle="Dressing Rooms."
              color="color-pink"
              cardBgColor="bg-white"
              regularTitle="To Let You Be You."
              description="Whether you need a dressing room, production office or need to move around town, we have a coach that can work for you."
              linkSection
              imageSrc="dressing.jpg"
              imageAlt="dressing room of coach"
            />
            <ServiceCard
              backgroundColor="bg-light-grey"
              colorfulTitle="Dressing Rooms."
              color="color-pink"
              cardBgColor="bg-white"
              regularTitle="To Let You Be You."
              description="Whether you need a dressing room, production office or need to move around town, we have a coach that can work for you."
              linkSection
              imageSrc="dressing.jpg"
              imageAlt="dressing room of coach"
            />
            {/* <Col xs={12} md={6} className={`card-container ${cardBgColor}`}>
              <TitleWithDescription
                colorfulTitle={colorfulTitle}
                color={color}
                regularTitle={regularTitle}
                description={description}
                textColor={textColorWhite}
              />
              <FullSizedImage fileName={imageSrc} alt={imageAlt} />
              </Col> */}
            <Col xs={12}>
              <LinkSection
                linkSectionTitle="Our services extend far beyond just these."
                buttonTitle="Ask about our full range of services"
                linkPath="/contact"
                textAlign="text-align-center"
              />
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}

export default ServicesHome
