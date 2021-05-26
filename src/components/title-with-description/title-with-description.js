import React from "react"

import "./title-with-description.scss"

const TitleWithDescription = ({
  colorfulTitle,
  regularTitle,
  color,
  description,
  textColor,
}) => {
  return (
    <div className="title-with-description">
      <h1 className={`colorful-title ${color}`}>{colorfulTitle}</h1>
      <h1 className={`${textColor}`}>{regularTitle}</h1>
      <h5 className={`${textColor}`}>{description}</h5>
    </div>
  )
}

export default TitleWithDescription
