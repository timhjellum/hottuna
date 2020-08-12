import React, { useEffect, useState } from "react"
import Modal from "./Modal"
import useViewport from "./useViewport"
import OrlandoMagicContent from "./OrlandoMagicContent"
const orlandoMagicLogoLarge = "../assets/images/orlando-magic/logo--large.png 250w"
const orlandoMagicLogoSmall = "../assets/images/orlando-magic/logo--small.png 200w"
const orlandoMagicLogoDefault = "../assets/images/orlando-magic/logo--default.png 150w"
const orlandoMagicHeroLarge = "../assets/images/orlando-magic/hero--large.jpg 540w"
const orlandoMagicHeroMedium = "../assets/images/orlando-magic/hero--medium.jpg 470w"
const orlandoMagicHeroSmall = "../assets/images/orlando-magic/hero--small.jpg 360w"
const orlandoMagicHeroDefault = "../assets/images/orlando-magic/hero--default.jpg 320w"
function OrlandoMagic(props) {
  let alt = "Orlando Magic"
  const { width } = useViewport()
  const breakpoint = 400
  return (
    <div name="orlando-magic" className="section orlando-magic">
      <div className="wrapper">
        <div className="box-1">
          <div className="logo">
            <picture>
              <source sizes="540px" srcSet={orlandoMagicLogoLarge} media="(min-width: 1024px)" />

              <source sizes="360px" srcSet={orlandoMagicLogoSmall} media="(min-width: 800px)" />
              <img srcSet={orlandoMagicLogoDefault} alt={alt} />
            </picture>
          </div>
          <div className="text-content">
            <h1>{alt}</h1>
            <h2 className="subtitle">Team Recruitment Tool</h2>
            <h3 className="dates"></h3>
            <h2 className="my-title">NBA Basketball Team Recruitment Tool</h2>
            <p className="description">The Orlando Magic tasked my team to consolidate and uniformely digitize their talent and recruitment process. The solution was to leverage SharePoint technologies to allowed users to securely input and retrieve data from a mobile-friendly tablet device. My role as the project user-experience lead was to facilitate requirement and Ideation, and using high-fidelity ptototypes, propose solutions. Upon client approval I developed the user interface to include a responsive design, and mobile friendly user interface. References are available upon request from this project.</p>
            {/*ul className="highlights">
  <li>Consolidated business process by offering technology solutions which allowed for collaboration and sharing of information.</li>
  <li>Created a mobile/tablet friendly responsive SharePoint user interface.</li>
  <li>Facilitated business requirement, information architecture, and Ideation.</li>
</ul 
			  */}
          </div>
        </div>
        <div className="box-2">
          {width < breakpoint ? (
            <Modal>
              <OrlandoMagicContent />
            </Modal>
          ) : (
            <OrlandoMagicContent />
          )}
        </div>
      </div>
    </div>
  )
}
export default OrlandoMagic
