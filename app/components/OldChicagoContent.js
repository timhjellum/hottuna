import React from "react"

function OldChicagoContent(props) {
  const oldChicagoHeroLarge = "../assets/images/old-chicago/hero--large.jpg 540w"
  const oldChicagoHeroMedium = "../assets/images/old-chicago/hero--medium.jpg 470w"
  const oldChicagoHeroSmall = "../assets/images/old-chicago/hero--small.jpg 360w"
  const oldChicagoHeroDefault = "../assets/images/old-chicago/hero--default.jpg 320w"
  let alt = "Old Chicago"
  return (
    <div className="wrapper">
      <div className="content">
        <picture>
          <source sizes="540px" srcSet={oldChicagoHeroLarge} media="(min-width: 1200px)" />
          <source sizes="470px" srcSet={oldChicagoHeroMedium} media="(min-width: 1024px)" />
          <source sizes="360px" srcSet={oldChicagoHeroSmall} media="(min-width: 800px)" />
          <img srcSet={oldChicagoHeroDefault} alt={alt} />
        </picture>
      </div>
    </div>
  )
}
export default OldChicagoContent
