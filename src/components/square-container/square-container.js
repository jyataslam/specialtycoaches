import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import Square from "../square/square"
import "./square-container.scss"

const ServiceSquare = () => {
  return (
    <div className="square-container-full">
      <div className="square-container">
        <Square />
      </div>
    </div>
  )
}

export default ServiceSquare
