import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo/seo"
import Hero from "../components/hero/hero"
import CoachesHome from "../components/coaches-home/coaches-home"

import "../variables.scss"
import "../app.scss"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <Hero />
    <CoachesHome />
  </Layout>
)

export default IndexPage
