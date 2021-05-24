import React from "react"
import { StaticImage } from "gatsby-plugin-image"

import "./square.scss"

const Square = () => {
  return (
    <>
      <div className="square square-side">
        <StaticImage
          src="../../images/hero.jpg"
          alt="steely dan coach"
          placeholder="blurred"
          objectFit="cover"
          objectPosition="right"
        />
      </div>
      <div className="square square-front">
        <StaticImage
          src="../../images/hero.jpg"
          alt="steely dan coach"
          placeholder="blurred"
          objectFit="cover"
          objectPosition="center"
        />
      </div>
      <div className="square square-back">
        <StaticImage
          src="../../images/hero.jpg"
          alt="steely dan coach"
          placeholder="blurred"
          objectFit="cover"
          objectPosition="center"
        />
      </div>
    </>
  )
}

export default Square
