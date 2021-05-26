import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo/seo"
import Hero from "../components/hero/hero"
import CoachesHome from "../components/coaches-home/coaches-home"
import ServicesHome from "../components/services-home/services-home"

import "../variables.scss"
import "../app.scss"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <Hero />
    <CoachesHome />
    <ServicesHome
      backgroundColor="bg-light-grey"
      colorfulTitle="Concert Touring."
      color="color-dark-blue"
      regularTitle="Traveling Your Way."
      description="Whether you need a band bus, crew bus, or star coach, we're just a call away."
      imageSrc="touring.jpg"
      imageAlt="steely dan coach"
    />
    <ServicesHome
      backgroundColor="bg-white"
      colorfulTitle="Corporate Events."
      color="color-orange"
      regularTitle="For Any Situation."
      description="We're well versed in thinking outside the box. We can provide a solution for your special event or corporate tour including vehicle wrapping."
      imageSrc="events.jpg"
      imageAlt="coach interior"
    />
    <ServicesHome
      backgroundColor="bg-light-grey"
      colorfulTitle="Dressing Rooms."
      color="color-pink"
      regularTitle="To Let You Be You."
      description="Whether you need a dressing room, production office or need to move around town, we have a coach that can work for you."
      linkSection
      imageSrc="dressing.jpg"
      imageAlt="dressing room of coach"
    />
  </Layout>
)

export default IndexPage
