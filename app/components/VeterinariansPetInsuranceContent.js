import React from "react"

function VeterinariansPetInsuranceContent(props) {
  const veterinariansPetInsuranceHeroLarge = "../assets/images/veterinarians-pet-insurance/hero--large.jpg 540w"
  const veterinariansPetInsuranceHeroMedium = "../assets/images/veterinarians-pet-insurance/hero--medium.jpg 470w"
  const veterinariansPetInsuranceHeroSmall = "../assets/images/veterinarians-pet-insurance/hero--small.jpg 360w"
  const veterinariansPetInsuranceHeroDefault = "../assets/images/veterinarians-pet-insurance/hero--default.jpg 320w"
  let alt = "Boston Market Website Redesign"
  return (
    <div className="wrapper">
      <div className="content">
        <picture>
          <source sizes="540px" srcSet={veterinariansPetInsuranceHeroLarge} media="(min-width: 1200px)" />
          <source sizes="470px" srcSet={veterinariansPetInsuranceHeroMedium} media="(min-width: 1024px)" />
          <source sizes="360px" srcSet={veterinariansPetInsuranceHeroSmall} media="(min-width: 800px)" />
          <img srcSet={veterinariansPetInsuranceHeroDefault} alt={alt} />
        </picture>
      </div>
    </div>
  )
}
export default VeterinariansPetInsuranceContent
