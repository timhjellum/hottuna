import React from "react"

function OrlandoMagicContent(props) {
  const orlandoMagicHeroLarge = "../assets/images/orlando-magic/hero--large.jpg 540w"
  const orlandoMagicHeroMedium = "../assets/images/orlando-magic/hero--medium.jpg 470w"
  const orlandoMagicHeroSmall = "../assets/images/orlando-magic/hero--small.jpg 360w"
  const orlandoMagicHeroDefault = "../assets/images/orlando-magic/hero--default.jpg 320w"
  let alt = "Boston Market Website Redesign"
  return (
    <div className="wrapper">
      <div className="content">
        <picture>
          <source sizes="540px" srcSet={orlandoMagicHeroLarge} media="(min-width: 1200px)" />
          <source sizes="470px" srcSet={orlandoMagicHeroMedium} media="(min-width: 1024px)" />
          <source sizes="360px" srcSet={orlandoMagicHeroSmall} media="(min-width: 800px)" />
          <img srcSet={orlandoMagicHeroDefault} alt={alt} />
        </picture>
      </div>
    </div>
  )
}
export default OrlandoMagicContent
