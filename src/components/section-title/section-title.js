import React from "react"

import "./section-title.scss"

const SectionTitle = ({ title, description }) => {
  return (
    <div className="section-title">
      <h4 className="title">{title}</h4>
      <h6 className="description">{description}</h6>
    </div>
  )
}

export default SectionTitle
