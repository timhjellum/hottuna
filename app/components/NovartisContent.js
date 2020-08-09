import React from "react"

function BlackAndVeatchContent(props) {
  const novartisHeroLarge = "../assets/images/novartis/hero--large.jpg 540w"
  const novartisHeroMedium = "../assets/images/novartis/hero--medium.jpg 470w"
  const novartisHeroSmall = "../assets/images/novartis/hero--small.jpg 360w"
  const novartisHeroDefault = "../assets/images/novartis/hero--default.jpg 320w"
  let alt = "Novartis Pharmaceuticals"
  return (
    <div className="wrapper">
      <div className="content">
        <picture>
          <source sizes="540px" srcSet={novartisHeroLarge} media="(min-width: 1200px)" />
          <source sizes="470px" srcSet={novartisHeroMedium} media="(min-width: 1024px)" />
          <source sizes="360px" srcSet={novartisHeroSmall} media="(min-width: 800px)" />
          <img srcSet={novartisHeroDefault} alt={alt} />
        </picture>
      </div>
    </div>
  )
}
export default BlackAndVeatchContent
