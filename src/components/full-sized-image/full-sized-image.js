import React from "react"
import { StaticQuery, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import "./full-sized-image.scss"

const FullSizedImage = ({ fileName, alt }) => {
  return (
    <StaticQuery
      query={graphql`
        query {
          images: allFile {
            edges {
              node {
                relativePath
                name
                childImageSharp {
                  gatsbyImageData(
                    width: 1500
                    placeholder: BLURRED
                    formats: [AUTO, WEBP, AVIF]
                  )
                }
              }
            }
          }
        }
      `}
      render={data => {
        const image = data.images.edges.find(n => {
          return n.node.relativePath.includes(fileName)
        })
        if (!image) {
          return null
        }

        const imageSrc = getImage(image.node)
        return <GatsbyImage image={imageSrc} alt={alt} />
      }}
    />
  )
}

export default FullSizedImage
