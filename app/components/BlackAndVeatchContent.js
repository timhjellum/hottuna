import React from "react"

function BlackAndVeatchContent(props) {
  const blackAndVeatchHeroLarge = "../assets/images/black-and-veatch/hero--large.jpg 540w"
  const blackAndVeatchHeroMedium = "../assets/images/black-and-veatch/hero--medium.jpg 470w"
  const blackAndVeatchHeroSmall = "../assets/images/black-and-veatch/hero--small.jpg 360w"
  const blackAndVeatchHeroDefault = "../assets/images/black-and-veatch/hero--default.jpg 320w"
  let alt = "Boston Market Website Redesign"
  return (
    <div className="wrapper">
      <div className="content">
        <picture>
          <source sizes="540px" srcSet={blackAndVeatchHeroLarge} media="(min-width: 1200px)" />
          <source sizes="470px" srcSet={blackAndVeatchHeroMedium} media="(min-width: 1024px)" />
          <source sizes="360px" srcSet={blackAndVeatchHeroSmall} media="(min-width: 800px)" />
          <img srcSet={blackAndVeatchHeroDefault} alt={alt} />
        </picture>
      </div>
    </div>
  )
}
export default BlackAndVeatchContent
