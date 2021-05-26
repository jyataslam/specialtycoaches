import React from "react"

import LinkButton from "../link-button/link-button"

import "./link-section.scss"

const LinkSection = ({
  linkSectionTitle,
  buttonTitle,
  linkPath,
  textAlign,
}) => {
  return (
    <div className={`link-section ${textAlign}`}>
      <h4>{linkSectionTitle}</h4>
      <LinkButton buttonTitle={buttonTitle} linkPath={linkPath} />
    </div>
  )
}

export default LinkSection
