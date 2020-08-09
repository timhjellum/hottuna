import React from "react"

function Honeywell(props) {
  const honeywellHeroLarge = "../assets/images/honeywell/hero--large.jpg 540w"
  const honeywellHeroMedium = "../assets/images/honeywell/hero--medium.jpg 470w"
  const honeywellHeroSmall = "../assets/images/honeywell/hero--small.jpg 360w"
  const honeywellHeroDefault = "../assets/images/honeywell/hero--default.jpg 320w"
  let alt = "Honeywell"
  return (
    <div className="wrapper">
      <div className="content">
        <picture>
          <source sizes="540px" srcSet={honeywellHeroLarge} media="(min-width: 1200px)" />
          <source sizes="470px" srcSet={honeywellHeroMedium} media="(min-width: 1024px)" />
          <source sizes="360px" srcSet={honeywellHeroSmall} media="(min-width: 800px)" />
          <img srcSet={honeywellHeroDefault} alt={alt} />
        </picture>
      </div>
    </div>
  )
}
export default Honeywell
