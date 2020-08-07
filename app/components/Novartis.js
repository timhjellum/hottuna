import React, { useEffect, useState } from "react"
const novartisLogoLarge = "../assets/images/novartis/logo--large.png 250w"
const novartisLogoSmall = "../assets/images/novartis/logo--small.png 200w"
const novartisLogoDefault = "../assets/images/novartis/logo--default.png 150w"
const novartisHeroLarge = "../assets/images/novartis/hero--large.jpg 540w"
const novartisHeroMedium = "../assets/images/novartis/hero--medium.jpg 470w"
const novartisHeroSmall = "../assets/images/novartis/hero--small.jpg 360w"
const novartisHeroDefault = "../assets/images/novartis/hero--default.jpg 320w"
function Novartis() {
  let alt = "Novartis Pharmaceuticals"
  return (
    <>
      <div className="wrapper">
        <div className="box-1">
          <div className="logo">
            <picture>
              <source sizes="540px" srcSet={novartisLogoLarge} media="(min-width: 1024px)" />
              <source sizes="360px" srcSet={novartisLogoSmall} media="(min-width: 800px)" />
              <img srcSet={novartisLogoDefault} alt={alt} />
            </picture>
          </div>
          <div className="content">
            <h1>{alt}</h1>
            <h2 className="subtitle">
              <a href="http://www.nibr.com" target="_blank">
                nibr.com
              </a>
            </h2>
            <h3 className="dates">June 2011 â€“ November 2011</h3>
            <h2 className="my-title">Lead User Experience (UX) Designer, Interactive Designer (ID) &#38; User Interface (UI) Developer</h2>
            <p className="description">EDC Intranet Migration to Microsoft SharePoint Cloud &#38; Office 356</p>
            <ul className="highlights">
              <li>Worked with business stakeholders to understand their vision and create a design which meets their expectations.</li>
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
                <source sizes="540px" srcSet={novartisHeroLarge} media="(min-width: 1200px)" />
                <source sizes="470px" srcSet={novartisHeroMedium} media="(min-width: 1024px)" />
                <source sizes="360px" srcSet={novartisHeroSmall} media="(min-width: 800px)" />
                <img srcSet={novartisHeroDefault} alt={alt} />
              </picture>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Novartis
