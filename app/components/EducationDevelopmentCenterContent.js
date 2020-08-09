import React from "react"

function EducationDevelopmentCenterContent(props) {
  const educationDevelopmentCenterHeroLarge = "../assets/images/education-development-center/hero--large.jpg 540w"
  const educationDevelopmentCenterHeroMedium = "../assets/images/education-development-center/hero--medium.jpg 470w"
  const educationDevelopmentCenterHeroSmall = "../assets/images/education-development-center/hero--small.jpg 360w"
  const educationDevelopmentCenterHeroDefault = "../assets/images/education-development-center/hero--default.jpg 320w"
  let alt = "Boston Market Website Redesign"
  return (
    <div className="wrapper">
      <div className="content">
        <picture>
          <source sizes="540px" srcSet={educationDevelopmentCenterHeroLarge} media="(min-width: 1200px)" />
          <source sizes="470px" srcSet={educationDevelopmentCenterHeroMedium} media="(min-width: 1024px)" />
          <source sizes="360px" srcSet={educationDevelopmentCenterHeroSmall} media="(min-width: 800px)" />
          <img srcSet={educationDevelopmentCenterHeroDefault} alt={alt} />
        </picture>
      </div>
    </div>
  )
}
export default EducationDevelopmentCenterContent
