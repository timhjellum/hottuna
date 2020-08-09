import React, { useEffect, useState } from "react"
import Modal from "./Modal"
import useViewport from "./useViewport"
import EducationDevelopmentCenterContent from "./EducationDevelopmentCenterContent"
const educationDevelopmentCenterLogoLarge = "../assets/images/education-development-center/logo--large.png 250w"
const educationDevelopmentCenterLogoSmall = "../assets/images/education-development-center/logo--small.png 200w"
const educationDevelopmentCenterLogoDefault = "../assets/images/education-development-center/logo--default.png 150w"
const educationDevelopmentCenterHeroLarge = "../assets/images/education-development-center/hero--large.jpg 540w"
const educationDevelopmentCenterHeroMedium = "../assets/images/education-development-center/hero--medium.jpg 470w"
const educationDevelopmentCenterHeroSmall = "../assets/images/education-development-center/hero--small.jpg 360w"
const educationDevelopmentCenterHeroDefault = "../assets/images/education-development-center/hero--default.jpg 320w"
function EducationDevelopmentCenter(props) {
  let alt = "Education Development Center (EDC)"
  const { width } = useViewport()
  const breakpoint = 400
  return (
    <div className="wrapper">
      <div className="box-1">
        <div className="logo">
          <picture>
            <source sizes="540px" srcSet={educationDevelopmentCenterLogoLarge} media="(min-width: 1024px)" />
            <source sizes="360px" srcSet={educationDevelopmentCenterLogoSmall} media="(min-width: 800px)" />
            <img srcSet={educationDevelopmentCenterLogoDefault} alt={alt} />
          </picture>
        </div>
        <div className="text-content">
          <h1>{alt}</h1>
          <h2 className="subtitle">Intranet</h2>
          <h3 className="dates">May 2016 - Jan 2017</h3>
          <h2 className="subtitle"></h2>
          <h3 className="dates"></h3>
          <h2 className="my-title">Lead User Experience (UX) Designer &#38; User Interface (UI) Developer</h2>
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
        {width < breakpoint ? (
          <Modal>
            <EducationDevelopmentCenterContent />
          </Modal>
        ) : (
          <EducationDevelopmentCenterContent />
        )}
      </div>
    </div>
  )
}

export default EducationDevelopmentCenter
