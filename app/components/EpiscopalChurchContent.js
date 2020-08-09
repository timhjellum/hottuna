import React from "react"

function EpiscopalChurchContent(props) {
  const episcopalChurchHeroLarge = "../assets/images/episcopal-church/hero--large.jpg 540w"
  const episcopalChurchHeroMedium = "../assets/images/episcopal-church/hero--medium.jpg 470w"
  const episcopalChurchHeroSmall = "../assets/images/episcopal-church/hero--small.jpg 360w"
  const episcopalChurchHeroDefault = "../assets/images/episcopal-church/hero--default.jpg 320w"
  let alt = "Boston Market Website Redesign"
  return (
    <div className="wrapper">
      <div className="content">
        <picture>
          <source sizes="540px" srcSet={episcopalChurchHeroLarge} media="(min-width: 1200px)" />
          <source sizes="470px" srcSet={episcopalChurchHeroMedium} media="(min-width: 1024px)" />
          <source sizes="360px" srcSet={episcopalChurchHeroSmall} media="(min-width: 800px)" />
          <img srcSet={episcopalChurchHeroDefault} alt={alt} />
        </picture>
      </div>
    </div>
  )
}
export default EpiscopalChurchContent
