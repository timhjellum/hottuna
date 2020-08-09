import React from "react"

function NewmontMiningContent(props) {
  const newmontMiningHeroLarge = "../assets/images/newmont-mining/hero--large.jpg 540w"
  const newmontMiningHeroMedium = "../assets/images/newmont-mining/hero--medium.jpg 470w"
  const newmontMiningHeroSmall = "../assets/images/newmont-mining/hero--small.jpg 360w"
  const newmontMiningHeroDefault = "../assets/images/newmont-mining/hero--default.jpg 320w"
  let alt = "Newmont Mining"
  return (
    <div className="wrapper">
      <div className="content">
        <picture>
          <source sizes="540px" srcSet={newmontMiningHeroLarge} media="(min-width: 1200px)" />
          <source sizes="470px" srcSet={newmontMiningHeroMedium} media="(min-width: 1024px)" />
          <source sizes="360px" srcSet={newmontMiningHeroSmall} media="(min-width: 800px)" />
          <img srcSet={newmontMiningHeroDefault} alt={alt} />
        </picture>
      </div>
    </div>
  )
}
export default NewmontMiningContent
