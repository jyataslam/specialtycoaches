import React from "react"
import { Col } from "react-bootstrap"

import TitleWithDescription from "../title-with-description/title-with-description"
import Image from "../full-sized-image/full-sized-image"

import "./service-card.scss"

const ServiceCard = ({
  colorfulTitle,
  regularTitle,
  color,
  description,
  textColor,
  cardBgColor,
  imageSrc,
  imageAlt,
}) => {
  return (
    <Col xs={12} md={6}>
      <div className={`service-card ${cardBgColor}`}>
        <TitleWithDescription
          colorfulTitle={colorfulTitle}
          color={color}
          regularTitle={regularTitle}
          description={description}
          textColor={textColor}
        />
        <Image fileName={imageSrc} alt={imageAlt} className="image" />
      </div>
    </Col>
  )
}

export default ServiceCard
