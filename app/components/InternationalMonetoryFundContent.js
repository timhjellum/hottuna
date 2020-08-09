import React from "react"

function InternationalMonetoryFundContent(props) {
  const internationalMonetoryFundHeroLarge = "../assets/images/international-monetory-fund/hero--large.jpg 540w"
  const internationalMonetoryFundHeroMedium = "../assets/images/international-monetory-fund/hero--medium.jpg 470w"
  const internationalMonetoryFundHeroSmall = "../assets/images/international-monetory-fund/hero--small.jpg 360w"
  const internationalMonetoryFundHeroDefault = "../assets/images/international-monetory-fund/hero--default.jpg 320w"
  let alt = "Boston Market Website Redesign"
  return (
    <div className="wrapper">
      <div className="content">
        <picture>
          <source sizes="540px" srcSet={internationalMonetoryFundHeroLarge} media="(min-width: 1200px)" />
          <source sizes="470px" srcSet={internationalMonetoryFundHeroMedium} media="(min-width: 1024px)" />
          <source sizes="360px" srcSet={internationalMonetoryFundHeroSmall} media="(min-width: 800px)" />
          <img srcSet={internationalMonetoryFundHeroDefault} alt={alt} />
        </picture>
      </div>
    </div>
  )
}
export default InternationalMonetoryFundContent
