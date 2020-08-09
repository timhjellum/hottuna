import React from "react"

function WyomingWorkforceServicesContent(props) {
  const wyomingWorkforceServicesHeroLarge = "../assets/images/wyoming-workforce-services/hero--large.jpg 540w"
  const wyomingWorkforceServicesHeroMedium = "../assets/images/wyoming-workforce-services/hero--medium.jpg 470w"
  const wyomingWorkforceServicesHeroSmall = "../assets/images/wyoming-workforce-services/hero--small.jpg 360w"
  const wyomingWorkforceServicesHeroDefault = "../assets/images/wyoming-workforce-services/hero--default.jpg 320w"
  let alt = "Boston Market Website Redesign"
  return (
    <div className="wrapper">
      <div className="content">
        <picture>
          <source sizes="540px" srcSet={wyomingWorkforceServicesHeroLarge} media="(min-width: 1200px)" />
          <source sizes="470px" srcSet={wyomingWorkforceServicesHeroMedium} media="(min-width: 1024px)" />
          <source sizes="360px" srcSet={wyomingWorkforceServicesHeroSmall} media="(min-width: 800px)" />
          <img srcSet={wyomingWorkforceServicesHeroDefault} alt={alt} />
        </picture>
      </div>
    </div>
  )
}
export default WyomingWorkforceServicesContent
