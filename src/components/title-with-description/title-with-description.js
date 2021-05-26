import React from "react"

import "./title-with-description.scss"

const TitleWithDescription = ({
  colorfulTitle,
  regularTitle,
  color,
  description,
}) => {
  return (
    <div className="title-with-description">
      <h1 className={`colorful-title ${color}`}>{colorfulTitle}</h1>
      <h1>{regularTitle}</h1>
      <h5>{description}</h5>
    </div>
  )
}

export default TitleWithDescription
