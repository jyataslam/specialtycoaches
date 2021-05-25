import React from "react"

import "./video.scss"

const Video = ({ videoSrcUrl, videoTitle }) => {
  return (
    <section className="video">
      <iframe
        src={videoSrcUrl}
        title={videoTitle}
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        frameborder="0"
      ></iframe>
    </section>
  )
}

export default Video
