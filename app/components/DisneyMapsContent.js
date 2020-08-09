import React from "react"

function DisneyMapsContent(props) {
  const disneyMapsHeroLarge = "../assets/images/disney-maps/hero--large.jpg 540w"
  const disneyMapsHeroMedium = "../assets/images/disney-maps/hero--medium.jpg 470w"
  const disneyMapsHeroSmall = "../assets/images/disney-maps/hero--small.jpg 360w"
  const disneyMapsHeroDefault = "../assets/images/disney-maps/hero--default.jpg 320w"
  let alt = "Boston Market Website Redesign"
  return (
    <div className="wrapper">
      <div className="content">
        <picture>
          <source sizes="540px" srcSet={disneyMapsHeroLarge} media="(min-width: 1200px)" />
          <source sizes="470px" srcSet={disneyMapsHeroMedium} media="(min-width: 1024px)" />
          <source sizes="360px" srcSet={disneyMapsHeroSmall} media="(min-width: 800px)" />
          <img srcSet={disneyMapsHeroDefault} alt={alt} />
        </picture>
      </div>
    </div>
  )
}
export default DisneyMapsContent
