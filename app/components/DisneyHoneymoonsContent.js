import React from "react"

function DisneyHoneymoonsContent(props) {
  const disneyHoneymoonsHeroLarge = "../assets/images/disney-honeymoons/hero--large.jpg 540w"
  const disneyHoneymoonsHeroMedium = "../assets/images/disney-honeymoons/hero--medium.jpg 470w"
  const disneyHoneymoonsHeroSmall = "../assets/images/disney-honeymoons/hero--small.jpg 360w"
  const disneyHoneymoonsHeroDefault = "../assets/images/disney-honeymoons/hero--default.jpg 320w"
  let alt = "Boston Market Website Redesign"
  return (
    <div className="wrapper">
      <div className="content">
        <picture>
          <source sizes="540px" srcSet={disneyHoneymoonsHeroLarge} media="(min-width: 1200px)" />
          <source sizes="470px" srcSet={disneyHoneymoonsHeroMedium} media="(min-width: 1024px)" />
          <source sizes="360px" srcSet={disneyHoneymoonsHeroSmall} media="(min-width: 800px)" />
          <img srcSet={disneyHoneymoonsHeroDefault} alt={alt} />
        </picture>
      </div>
    </div>
  )
}
export default DisneyHoneymoonsContent
