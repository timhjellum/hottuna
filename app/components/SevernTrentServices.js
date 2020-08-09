import React, { useEffect, useState } from "react"
import Modal from "./Modal"
import useViewport from "./useViewport"
import SevernTrentServicesContent from "./SevernTrentServicesContent"
const severnTrentServicesLogoLarge = "../assets/images/severn-trent-services/logo--large.png 250w"
const severnTrentServicesLogoSmall = "../assets/images/severn-trent-services/logo--small.png 200w"
const severnTrentServicesLogoDefault = "../assets/images/severn-trent-services/logo--default.png 150w"
const severnTrentServicesHeroLarge = "../assets/images/severn-trent-services/hero--large.jpg 540w"
const severnTrentServicesHeroMedium = "../assets/images/severn-trent-services/hero--medium.jpg 470w"
const severnTrentServicesHeroSmall = "../assets/images/severn-trent-services/hero--small.jpg 360w"
const severnTrentServicesHeroDefault = "../assets/images/severn-trent-services/hero--default.jpg 320w"
function SevernTrentServices(props) {
  let alt = "Severn Trent Services"
  const { width } = useViewport()
  const breakpoint = 400
  return (
    <div className="wrapper">
      <div className="box-1">
        <div className="logo">
          <picture>
            <source sizes="540px" srcSet={severnTrentServicesLogoLarge} media="(min-width: 1024px)" />
            <source sizes="360px" srcSet={severnTrentServicesLogoSmall} media="(min-width: 800px)" />
            <img srcSet={severnTrentServicesLogoDefault} alt={alt} />
          </picture>
        </div>
        <div className="text-content">
          <h1>{alt}</h1>
          <h2 className="subtitle">Intranet</h2>
          <h3 className="dates">February 2012 â€“ July 2012</h3>
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
            <SevernTrentServicesContent />
          </Modal>
        ) : (
          <SevernTrentServicesContent />
        )}
      </div>
    </div>
  )
}

export default SevernTrentServices
