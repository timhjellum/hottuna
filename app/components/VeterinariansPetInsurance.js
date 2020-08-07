import React, { useEffect, useState } from "react"
const veterinariansPetInsuranceLogoLarge = "../assets/images/veterinarians-pet-insurance/logo--large.png 250w"
const veterinariansPetInsuranceLogoSmall = "../assets/images/veterinarians-pet-insurance/logo--small.png 200w"
const veterinariansPetInsuranceLogoDefault = "../assets/images/veterinarians-pet-insurance/logo--default.png 150w"
const veterinariansPetInsuranceHeroLarge = "../assets/images/veterinarians-pet-insurance/hero--large.jpg 540w"
const veterinariansPetInsuranceHeroMedium = "../assets/images/veterinarians-pet-insurance/hero--medium.jpg 470w"
const veterinariansPetInsuranceHeroSmall = "../assets/images/veterinarians-pet-insurance/hero--small.jpg 360w"
const veterinariansPetInsuranceHeroDefault = "../assets/images/veterinarians-pet-insurance/hero--default.jpg 320w"
function VeterinariansPetInsurance() {
  let alt = "Veterinary Pet Insurance (VPI)"
  return (
    <div className="wrapper">
      <div className="box-1">
        <div className="logo">
          <picture>
            <source sizes="540px" srcSet={veterinariansPetInsuranceLogoLarge} media="(min-width: 1024px)" />
            <source sizes="360px" srcSet={veterinariansPetInsuranceLogoSmall} media="(min-width: 800px)" />
            <img srcSet={veterinariansPetInsuranceLogoDefault} alt={alt} />
          </picture>
        </div>
        <div className="content">
          <h1>{alt}</h1>
          <h2 className="subtitle">Website Remediation</h2>
          <h3 className="dates"></h3>
          <h2 className="my-title">Lead User Experience (UX) Designer &#38; User Interface (UI) Developer</h2>
          <p className="description"></p>
          <ul className="highlights">
            <li>Assess existing environment against the current business requirements to formulate a gap analysis.</li>
            <li>Propose a scalable solutions, using pervasive technological trends, to stakeholders.</li>
            <li>Develop high-fidelity prototypes based on a responsive grid layout and conduct formative testing against complex use cases.</li>
            <li>Create pixel perfect SharePoint masterpages, page layouts, web parts, and apps that match existing design standards and branding requirements.</li>
          </ul>
          <p className="technologies"></p>
          <p className="tools"></p>
        </div>
      </div>
      <div className="box-2">
        {" "}
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
      </div>
    </div>
  )
}

export default VeterinariansPetInsurance
