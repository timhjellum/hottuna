import React, { useEffect, useState } from "react"
import Modal from "./Modal"
import useViewport from "./useViewport"
import MastercardContent from "./MastercardContent"
const mastercardLogoLarge = "../assets/images/mastercard/logo--large.png 250w"
const mastercardLogoSmall = "../assets/images/mastercard/logo--small.png 200w"
const mastercardLogoDefault = "../assets/images/mastercard/logo--default.png 150w"
const mastercardHeroLarge = "../assets/images/mastercard/hero--large.jpg 540w"
const mastercardHeroMedium = "../assets/images/mastercard/hero--medium.jpg 470w"
const mastercardHeroSmall = "../assets/images/mastercard/hero--small.jpg 360w"
const mastercardHeroDefault = "../assets/images/mastercard/hero--default.jpg 320w"
function Mastercard(props) {
  let alt = "MasterCard"
  const { width } = useViewport()
  const breakpoint = 400
  return (
    <div className="wrapper">
      <div className="box-1">
        <div className="logo">
          <picture>
            <source sizes="540px" srcSet={mastercardLogoLarge} media="(min-width: 1024px)" />
            <source sizes="360px" srcSet={mastercardLogoSmall} media="(min-width: 800px)" />
            <img srcSet={mastercardLogoDefault} alt={alt} />
          </picture>
        </div>
        <div className="content">
          <h1>{alt}</h1>
          <h2 className="subtitle">Intranet</h2>
          <h3 className="dates">March 2012 â€“ October 2012</h3>
          <h2 className="my-title">Lead User Interface (UI) Developer</h2>
          <p className="description">Managed an off-shore development team for user-interface adherence, design and user-experience standards</p>
          <ul className="highlights">
            <li>Worked with business stakeholders to understand their vision and create a design which meets their expectations.</li>
          </ul>
          <p className="technologies"></p>
          <p className="tools"></p>
        </div>
      </div>
      <div className="box-2">
        {width < breakpoint ? (
          <Modal>
            <MastercardContent />
          </Modal>
        ) : (
          <MastercardContent />
        )}
      </div>
    </div>
  )
}

export default Mastercard
