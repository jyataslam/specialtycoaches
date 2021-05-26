import React from "react"
import { StaticImage } from "gatsby-plugin-image"

import "./squares-four.scss"

const SquaresFour = () => (
  <div className="squares-four-container">
    <div className="squares-four-item">
      <StaticImage src="../../images/dressing.jpg" />
    </div>
    <div className="squares-four-item">
      <StaticImage src="../../images/events.jpg" />
    </div>
    <div className="squares-four-item">
      <StaticImage src="../../images/hero.jpg" />
    </div>
    <div className="squares-four-item">
      <StaticImage src="../../images/touring.jpg" />
    </div>
  </div>
)

export default SquaresFour
