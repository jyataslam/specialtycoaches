import React from "react"

import "./section-title.scss"

const SectionTitle = ({
  title,
  description,
  subDescription,
  span,
  textAlign,
}) => {
  return (
    <div className={`section-title ${textAlign}`}>
      {/* <h4 className="title">{title}</h4> */}
      <h4 className="description">{description}</h4>
      <h4 className="description">
        {subDescription}
        <span>{span}</span>
      </h4>
    </div>
  )
}

export default SectionTitle
