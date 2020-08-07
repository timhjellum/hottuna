import React, { useEffect, useState } from "react"
const wyomingWorkforceServicesLogoLarge = "../assets/images/wyoming-workforce-services/logo--large.png 250w"
const wyomingWorkforceServicesLogoSmall = "../assets/images/wyoming-workforce-services/logo--small.png 200w"
const wyomingWorkforceServicesLogoDefault = "../assets/images/wyoming-workforce-services/logo--default.png 150w"
const wyomingWorkforceServicesHeroLarge = "../assets/images/wyoming-workforce-services/hero--large.jpg 540w"
const wyomingWorkforceServicesHeroMedium = "../assets/images/wyoming-workforce-services/hero--medium.jpg 470w"
const wyomingWorkforceServicesHeroSmall = "../assets/images/wyoming-workforce-services/hero--small.jpg 360w"
const wyomingWorkforceServicesHeroDefault = "../assets/images/wyoming-workforce-services/hero--default.jpg 320w"
function WyomingWorkforceServices() {
  let alt = "Wyoming Workforce Services"
  return (
    <div className="wrapper">
      <div className="box-1">
        <div className="logo">
          <picture>
            <source sizes="540px" srcSet={wyomingWorkforceServicesLogoLarge} media="(min-width: 1024px)" />
            <source sizes="360px" srcSet={wyomingWorkforceServicesLogoSmall} media="(min-width: 800px)" />
            <img srcSet={wyomingWorkforceServicesLogoDefault} alt={alt} />
          </picture>
        </div>
        <div className="text-content">
          <h1 className="title">{alt}</h1>
          <h2 className="subtitle">
            <a href="http://www.wyomingworkforce.org/" title={alt}>
              wyomingworkforce.org
            </a>
          </h2>
          <h3 className="dates"></h3>
          <h2 className="my-title">Lead User Experience (UX) Designer, Interactive Designer (ID) &#38; User Interface (UI) Developer</h2>
          <p className="description">Provided a turn-key SharePoint 2010 solution to include branding and design; audience, roles, and security; localization (multi-language) for international users; publishing and team site creation; and planning migration strategies.</p>
          <ul className="highlights">
            <li>Worked with business stakeholders to understand their vision and create a design which meets their expectations.</li>
            <li>Perform a comprehensive product and services content audit and organize into a user-centric taxonomy.</li>
            <li>Oversaw all aspects of an end-to-end user experience leveraging an iterative user-centered design process</li>
            <li>Implement localization (multi-language support) for international users.</li>
            <li>Established SharePoint governance documents to include user interface style guidelines, create security groups, roles, and audiences.</li>
          </ul>
          <p className="technologies"></p>
          <p className="tools"></p>
        </div>
      </div>
      <div className="box-2">
        <div className="wrapper">
          <div className="content">
            <picture>
              <source sizes="540px" srcSet={wyomingWorkforceServicesHeroLarge} media="(min-width: 1200px)" />
              <source sizes="470px" srcSet={wyomingWorkforceServicesHeroMedium} media="(min-width: 1024px)" />
              <source sizes="360px" srcSet={wyomingWorkforceServicesHeroSmall} media="(min-width: 800px)" />
              <img srcSet={wyomingWorkforceServicesHeroDefault} alt={alt} />
            </picture>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WyomingWorkforceServices
