import React from "react"

function TripContent(props) {
  const tripHeroLarge = "../assets/images/Trip/hero--large.jpg 540w"
  const tripHeroMedium = "../assets/images/Trip/hero--medium.jpg 470w"
  const tripHeroSmall = "../assets/images/Trip/hero--small.jpg 360w"
  const tripHeroDefault = "../assets/images/Trip/hero--default.jpg 320w"
  let alt = "Boston Market Website Redesign"
  return (
    <div className="wrapper">
      <div className="content">
        <picture>
          <source sizes="540px" srcSet={tripHeroLarge} media="(min-width: 1200px)" />
          <source sizes="470px" srcSet={tripHeroMedium} media="(min-width: 1024px)" />
          <source sizes="360px" srcSet={tripHeroSmall} media="(min-width: 800px)" />
          <img srcSet={tripHeroDefault} alt={alt} />
        </picture>
      </div>
    </div>
  )
}
export default TripContent
