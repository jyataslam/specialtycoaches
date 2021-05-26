import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo/seo"
import Hero from "../components/hero/hero"
import CoachesHome from "../components/coaches-home/coaches-home"
import ServicesHome from "../components/services-home/services-home"
import AboutHome from "../components/about-home/about-home"

import "../variables.scss"
import "../app.scss"

const IndexPage = () => (
  <Layout>
    <Seo />
    <Hero />
    <CoachesHome />
    <ServicesHome />
    <AboutHome />
  </Layout>
)

export default IndexPage
