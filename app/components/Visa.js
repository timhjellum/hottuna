import React, { useEffect, useState } from "react"
const visaLogoLarge = "../assets/images/visa/logo--large.png 250w"
const visaLogoSmall = "../assets/images/visa/logo--small.png 200w"
const visaLogoDefault = "../assets/images/visa/logo--default.png 150w"
const visaHeroLarge = "../assets/images/visa/hero--large.jpg 540w"
const visaHeroMedium = "../assets/images/visa/hero--medium.jpg 470w"
const visaHeroSmall = "../assets/images/visa/hero--small.jpg 360w"
const visaHeroDefault = "../assets/images/visa/hero--default.jpg 320w"
function Visa() {
  let alt = ""
  return (
    <div className="wrapper">
      <div className="box-1">
        <div className="logo">
          <picture>
            <source sizes="540px" srcSet={visaLogoLarge} media="(min-width: 1024px)" />
            <source sizes="360px" srcSet={visaLogoSmall} media="(min-width: 800px)" />
            <img srcSet={visaLogoDefault} alt={alt} />
          </picture>
        </div>
        <div className="content">
          <h1>{alt}</h1>
          <h2 className="subtitle">Websites, Extranets &#38; Intranets; Browser Compatability Project</h2>
          <h3 className="dates">&lt;2011&gt;</h3>
          <h2 className="my-title">Lead User Interface (UI) / Front-End Developer</h2>
          <p className="description">Responsible for the remediation of various VISA online applications to allow for users to access and leverage tools and online products across all browsers.</p>
        </div>
      </div>
      <div className="box-2">
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
      </div>
    </div>
  )
}

export default Visa
