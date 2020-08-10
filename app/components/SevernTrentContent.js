import React from "react"

function SevernTrentContent(props) {
  const SevernTrentHeroLarge = "../assets/images/severn-trent/hero--large.jpg 540w"
  const SevernTrentHeroMedium = "../assets/images/severn-trent/hero--medium.jpg 470w"
  const SevernTrentHeroSmall = "../assets/images/severn-trent/hero--small.jpg 360w"
  const SevernTrentHeroDefault = "../assets/images/severn-trent/hero--default.jpg 320w"
  let alt = "Severn Trent"
  return (
    <div className="wrapper">
      <div className="content">
        <picture>
          <source sizes="540px" srcSet={SevernTrentHeroLarge} media="(min-width: 1200px)" />
          <source sizes="470px" srcSet={SevernTrentHeroMedium} media="(min-width: 1024px)" />
          <source sizes="360px" srcSet={SevernTrentHeroSmall} media="(min-width: 800px)" />
          <img srcSet={SevernTrentHeroDefault} alt={alt} />
        </picture>
      </div>
    </div>
  )
}
export default SevernTrentContent
