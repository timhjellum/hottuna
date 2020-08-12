import React, { useEffect, useState } from "react"
import Modal from "./Modal"
import useViewport from "./useViewport"
import InternationalMonetoryFundContent from "./InternationalMonetoryFundContent"
const internationalMonetoryFundLogoLarge = "../assets/images/international-monetory-fund/logo--large.png 250w"
const internationalMonetoryFundLogoSmall = "../assets/images/international-monetory-fund/logo--small.png 200w"
const internationalMonetoryFundLogoDefault = "../assets/images/international-monetory-fund/logo--default.png 150w"
const internationalMonetoryFundHeroLarge = "../assets/images/international-monetory-fund/hero--large.jpg 540w"
const internationalMonetoryFundHeroMedium = "../assets/images/international-monetory-fund/hero--medium.jpg 470w"
const internationalMonetoryFundHeroSmall = "../assets/images/international-monetory-fund/hero--small.jpg 360w"
const internationalMonetoryFundHeroDefault = "../assets/images/international-monetory-fund/hero--default.jpg 320w"
function InternationalMonetoryFund(props) {
  let alt = "International Monetary Fund (IMF)"
  const { width } = useViewport()
  const breakpoint = 400
  return (
    <div name="international-monetary-fund" className="section international-monetary-fund">
      <div className="wrapper">
        <div className="box-1">
          <div className="logo">
            <picture>
              <source sizes="540px" srcSet={internationalMonetoryFundLogoLarge} media="(min-width: 1024px)" />
              <source sizes="360px" srcSet={internationalMonetoryFundLogoSmall} media="(min-width: 800px)" />
              <img srcSet={internationalMonetoryFundLogoDefault} alt={alt} />
            </picture>
          </div>
          <div className="content">
            <h1>{alt}</h1>
            <h2 className="subtitle">Intranet</h2>
            <h3 className="dates"></h3>
            <h2 className="my-title">Lead User Experience (UX) Designer, User Interface (UI) Developer</h2>
            <p className="description"></p>
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
              <InternationalMonetoryFundContent />
            </Modal>
          ) : (
            <InternationalMonetoryFundContent />
          )}
        </div>
      </div>
    </div>
  )
}

export default InternationalMonetoryFund
