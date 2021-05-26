import React from "react"
import { Link } from "gatsby"

import "./link-button.scss"

const LinkButton = ({ buttonTitle, linkPath }) => {
  return (
    <Link to={linkPath} className="link-button">
      {buttonTitle} <div />
    </Link>
  )
}

export default LinkButton
