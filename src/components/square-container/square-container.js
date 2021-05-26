import React from "react"

import Square from "../square/square"
import SquaresFour from "../squares-four/squares-four"

import "./square-container.scss"

const ServiceSquare = () => {
  return (
    <>
      <div className="square-container-full">
        <div className="square-container">
          <Square />
        </div>
      </div>
      <div className="square-container-four">
        <SquaresFour />
      </div>
    </>
  )
}

export default ServiceSquare
