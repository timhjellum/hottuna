import React from "react"

function DisneyWeddingsContent(props) {
  const disneyWeddingsHeroLarge = "../assets/images/disney-weddings/hero--large.jpg 540w"
  const disneyWeddingsHeroMedium = "../assets/images/disney-weddings/hero--medium.jpg 470w"
  const disneyWeddingsHeroSmall = "../assets/images/disney-weddings/hero--small.jpg 360w"
  const disneyWeddingsHeroDefault = "../assets/images/disney-weddings/hero--default.jpg 320w"
  let alt = "Boston Market Website Redesign"
  return (
    <div className="wrapper">
      <div className="content">
        <picture>
          <source sizes="540px" srcSet={disneyWeddingsHeroLarge} media="(min-width: 1200px)" />
          <source sizes="470px" srcSet={disneyWeddingsHeroMedium} media="(min-width: 1024px)" />
          <source sizes="360px" srcSet={disneyWeddingsHeroSmall} media="(min-width: 800px)" />
          <img srcSet={disneyWeddingsHeroDefault} alt={alt} />
        </picture>
      </div>
    </div>
  )
}
export default DisneyWeddingsContent
