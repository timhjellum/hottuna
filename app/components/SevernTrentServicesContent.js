import React from "react"

function SevernTrentServicesContent(props) {
  const severnTrentServicesHeroLarge = "../assets/images/severn-trent-services/hero--large.jpg 540w"
  const severnTrentServicesHeroMedium = "../assets/images/severn-trent-services/hero--medium.jpg 470w"
  const severnTrentServicesHeroSmall = "../assets/images/severn-trent-services/hero--small.jpg 360w"
  const severnTrentServicesHeroDefault = "../assets/images/severn-trent-services/hero--default.jpg 320w"
  let alt = "Boston Market Website Redesign"
  return (
    <div className="wrapper">
      <div className="content">
        <picture>
          <source sizes="540px" srcSet={severnTrentServicesHeroLarge} media="(min-width: 1200px)" />
          <source sizes="470px" srcSet={severnTrentServicesHeroMedium} media="(min-width: 1024px)" />
          <source sizes="360px" srcSet={severnTrentServicesHeroSmall} media="(min-width: 800px)" />
          <img srcSet={severnTrentServicesHeroDefault} alt={alt} />
        </picture>
      </div>
    </div>
  )
}
export default SevernTrentServicesContent
