import React from "react"

import "./video.scss"

const Video = ({ videoSrcUrl, videoTitle }) => {
  const videoSrcWithMods =
    videoSrcUrl +
    "&autoplay=1&showinfo=0&controls=0&loop=1&modestbranding=1&playsinline=1&rel=0&showinfo=0&fs=0&mute=1"

  return (
    <section className="video">
      <iframe
        src={videoSrcWithMods}
        title={videoTitle}
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        frameBorder="0"
      ></iframe>
    </section>
  )
}

export default Video
