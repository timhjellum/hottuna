import React from "react"

function VisaContent(props) {
  const visaHeroLarge = "../assets/images/visa/hero--large.jpg 540w"
  const visaHeroMedium = "../assets/images/visa/hero--medium.jpg 470w"
  const visaHeroSmall = "../assets/images/visa/hero--small.jpg 360w"
  const visaHeroDefault = "../assets/images/visa/hero--default.jpg 320w"
  let alt = "Boston Market Website Redesign"
  return (
    <div className="wrapper">
      <div className="content">
        <picture>
          <source sizes="540px" srcSet={visaHeroLarge} media="(min-width: 1200px)" />
          <source sizes="470px" srcSet={visaHeroMedium} media="(min-width: 1024px)" />
          <source sizes="360px" srcSet={visaHeroSmall} media="(min-width: 800px)" />
          <img srcSet={visaHeroDefault} alt={alt} />
        </picture>
      </div>
    </div>
  )
}
export default VisaContent
