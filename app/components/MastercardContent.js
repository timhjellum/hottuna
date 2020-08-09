import React from "react"

function MastercardContent(props) {
  const mastercardHeroLarge = "../assets/images/mastercard/hero--large.jpg 540w"
  const mastercardHeroMedium = "../assets/images/mastercard/hero--medium.jpg 470w"
  const mastercardHeroSmall = "../assets/images/mastercard/hero--small.jpg 360w"
  const mastercardHeroDefault = "../assets/images/mastercard/hero--default.jpg 320w"
  let alt = "Boston Market Website Redesign"
  return (
    <div className="wrapper">
      <div className="content">
        <picture>
          <source sizes="540px" srcSet={mastercardHeroLarge} media="(min-width: 1200px)" />
          <source sizes="470px" srcSet={mastercardHeroMedium} media="(min-width: 1024px)" />
          <source sizes="360px" srcSet={mastercardHeroSmall} media="(min-width: 800px)" />
          <img srcSet={mastercardHeroDefault} alt={alt} />
        </picture>
      </div>
    </div>
  )
}
export default MastercardContent
