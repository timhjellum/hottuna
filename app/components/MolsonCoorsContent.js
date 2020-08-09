import React from "react"

function MolsonCoorsContent(props) {
  const molsonCoorsHeroLarge = "../assets/images/molson-coors/hero--large.jpg 540w"
  const molsonCoorsHeroMedium = "../assets/images/molson-coors/hero--medium.jpg 470w"
  const molsonCoorsHeroSmall = "../assets/images/molson-coors/hero--small.jpg 360w"
  const molsonCoorsHeroDefault = "../assets/images/molson-coors/hero--default.jpg 320w"
  let alt = "Boston Market Website Redesign"
  return (
    <div className="wrapper">
      <div className="content">
        <picture>
          <source sizes="540px" srcSet={molsonCoorsHeroLarge} media="(min-width: 1200px)" />
          <source sizes="470px" srcSet={molsonCoorsHeroMedium} media="(min-width: 1024px)" />
          <source sizes="360px" srcSet={molsonCoorsHeroSmall} media="(min-width: 800px)" />
          <img srcSet={molsonCoorsHeroDefault} alt={alt} />
        </picture>
      </div>
    </div>
  )
}
export default MolsonCoorsContent
