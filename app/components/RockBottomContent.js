import React from "react"

function RockBottomContent(props) {
  const rockBottomHeroLarge = "../assets/images/rock-bottom/hero--large.jpg 540w"
  const rockBottomHeroMedium = "../assets/images/rock-bottom/hero--medium.jpg 470w"
  const rockBottomHeroSmall = "../assets/images/rock-bottom/hero--small.jpg 360w"
  const rockBottomHeroDefault = "../assets/images/rock-bottom/hero--default.jpg 320w"
  let alt = "Boston Market Website Redesign"
  return (
    <div className="wrapper">
      <div className="content">
        <picture>
          <source sizes="540px" srcSet={rockBottomHeroLarge} media="(min-width: 1200px)" />
          <source sizes="470px" srcSet={rockBottomHeroMedium} media="(min-width: 1024px)" />
          <source sizes="360px" srcSet={rockBottomHeroSmall} media="(min-width: 800px)" />
          <img srcSet={rockBottomHeroDefault} alt={alt} />
        </picture>
      </div>
    </div>
  )
}
export default RockBottomContent
