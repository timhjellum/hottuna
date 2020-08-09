import React from "react"

function FastsignsContent(props) {
  const fastsignsHeroLarge = "../assets/images/fastsigns/hero--large.jpg 540w"
  const fastsignsHeroMedium = "../assets/images/fastsigns/hero--medium.jpg 470w"
  const fastsignsHeroSmall = "../assets/images/fastsigns/hero--small.jpg 360w"
  const fastsignsHeroDefault = "../assets/images/fastsigns/hero--default.jpg 320w"
  let alt = "Boston Market Website Redesign"
  return (
    <div className="wrapper">
      <div className="content">
        <picture>
          <source sizes="540px" srcSet={fastsignsHeroLarge} media="(min-width: 1200px)" />
          <source sizes="470px" srcSet={fastsignsHeroMedium} media="(min-width: 1024px)" />
          <source sizes="360px" srcSet={fastsignsHeroSmall} media="(min-width: 800px)" />
          <img srcSet={fastsignsHeroDefault} alt={alt} />
        </picture>
      </div>
    </div>
  )
}
export default FastsignsContent
