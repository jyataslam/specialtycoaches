import React from "react"

import "./section-title.scss"

const SectionTitle = ({ title, description }) => {
  return (
    <div className="section-title">
      {/* <h4 className="title">{title}</h4> */}
      <h4 className="description">{description}</h4>
      <h4 className="description">
        take your <span>pick</span>.
      </h4>
    </div>
  )
}

export default SectionTitle
