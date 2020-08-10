import React, { useEffect, useState } from "react"
import Modal from "./Modal"
import useViewport from "./useViewport"
import WyomingWorkforceServicesContent from "./WyomingWorkforceServicesContent"
const wyomingWorkforceServicesLogoLarge = "../assets/images/wyoming-workforce-services/logo--large.png 250w"
const wyomingWorkforceServicesLogoSmall = "../assets/images/wyoming-workforce-services/logo--small.png 200w"
const wyomingWorkforceServicesLogoDefault = "../assets/images/wyoming-workforce-services/logo--default.png 150w"
function WyomingWorkforceServices(props) {
  let alt = "Wyoming Workforce Services"
  const { width } = useViewport()
  const breakpoint = 400
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
        {width < breakpoint ? (
          <Modal>
            <WyomingWorkforceServicesContent />
          </Modal>
        ) : (
          <WyomingWorkforceServicesContent />
        )}
      </div>
    </div>
  )
}

export default WyomingWorkforceServices
