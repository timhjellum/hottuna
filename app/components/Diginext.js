import React, { useEffect, useState } from "react"
import Modal from "./Modal"
import useViewport from "./useViewport"
import DiginextContent from "./DiginextContent"

function Diginext(props) {
  const diginextLogoLarge = "../assets/images/diginext/logo--large.png 250w"
  const diginextLogoSmall = "../assets/images/diginext/logo--small.png 200w"
  const diginextLogoDefault = "../assets/images/diginext/logo--default.png 150w"
  const diginextHeroLarge = "../assets/images/diginext/hero--large.jpg 540w"
  const diginextHeroMedium = "../assets/images/diginext/hero--medium.jpg 470w"
  const diginextHeroSmall = "../assets/images/diginext/hero--small.jpg 360w"
  const diginextHeroDefault = "../assets/images/diginext/hero--default.jpg 320w"
  let alt = "Diginext"
  const { width } = useViewport()
  const breakpoint = 400
  return (
    <div className="wrapper">
      <div className="box-1">
        <div className="logo">
          <picture>
            <source sizes="250px" srcSet={diginextLogoLarge} media="(min-width: 1024px)" />
            <source sizes="200px" srcSet={diginextLogoSmall} media="(min-width: 800px)" />
            <img srcSet={diginextLogoDefault} alt={alt} />
          </picture>
        </div>
        <div className="text-content">
          <h1>{alt}</h1>
          <h2 className="subtitle">
            <a href="https://www.diginextfilms.com/" target="_blank">
              diginextfilms.com
            </a>
          </h2>
          <h3 className="dates"></h3>
          <h2 className="my-title">Lead Information Architect (IA) and User Experience (UX) Designer</h2>
          <p className="description"></p>
          <ul className="highlights">
            <li>Developed a detailed product grouping and classification system based on the users' needs.</li>
            <li>Perform a content inventory and facilitate migration strategy sessions to ensure all content is organized and transitioned successfully.</li>
            <li>Perform a comprehensive product and services content audit and organize into a user-centric taxonomy.</li>
            <li>Facilitate requirements gathering sessions with business stakeholders inorder to build a highly detailed site maps and wireframes.</li>
            <li>Facilitate persona workshops and produce representative users and groups.</li>
          </ul>
          <p className="technologies"></p>
          <p className="tools"></p>
        </div>
      </div>
      <div className="box-2">
        {width < breakpoint ? (
          <Modal>
            <DiginextContent />
          </Modal>
        ) : (
          <DiginextContent />
        )}
      </div>
    </div>
  )
}

export default Diginext
