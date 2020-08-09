import React, { useEffect, useState } from "react"
import Modal from "./Modal"
import useViewport from "./useViewport"
import EpiscopalChurchContent from "./EpiscopalChurchContent"
const episcopalChurchLogoLarge = "../assets/images/episcopal-church/logo--large.png 250w"
const episcopalChurchLogoSmall = "../assets/images/episcopal-church/logo--small.png 200w"
const episcopalChurchLogoDefault = "../assets/images/episcopal-church/logo--default.png 150w"
const episcopalChurchHeroLarge = "../assets/images/episcopal-church/hero--large.jpg 540w"
const episcopalChurchHeroMedium = "../assets/images/episcopal-church/hero--medium.jpg 470w"
const episcopalChurchHeroSmall = "../assets/images/episcopal-church/hero--small.jpg 360w"
const episcopalChurchHeroDefault = "../assets/images/episcopal-church/hero--default.jpg 320w"
function EpiscopalChurch(props) {
  let alt = "Episcopal Church"
  const { width } = useViewport()
  const breakpoint = 400
  return (
    <div className="wrapper">
      <div className="box-1">
        <div className="logo">
          <picture>
            <source sizes="540px" srcSet={episcopalChurchLogoLarge} media="(min-width: 1024px)" />
            <source sizes="360px" srcSet={episcopalChurchLogoSmall} media="(min-width: 800px)" />
            <img srcSet={episcopalChurchLogoDefault} alt={alt} />
          </picture>
        </div>
        <div className="text-content">
          <h1>{alt}</h1>
          <h2 className="subtitle">
            <a href="https://www.churchpublishing.org/">churchpublishing.org</a>
          </h2>
          <h3 className="dates">September 2010 â€“ June 2011</h3>
          <h2 className="my-title">Lead User Experience (UX) Designer, Interactive Designer (ID) &#38; User Interface (UI) Developer</h2>
          <p className="description"></p>
          <ul className="highlights">
            <li>Worked with business stakeholders to understand their vision and create a design which meets their expectations.</li>
            <li>Perform a content inventory and facilitate migration strategy sessions to ensure all content is organized and transitioned successfully.</li>
            <li>Oversaw all aspects of an end-to-end user experience leveraging an iterative user-centered design process</li>
            <li>Implement localization for international users.</li>
          </ul>
          <p className="technologies"></p>
          <p className="tools"></p>
        </div>
      </div>
      <div className="box-2">
        {width < breakpoint ? (
          <Modal>
            <EpiscopalChurchContent />
          </Modal>
        ) : (
          <EpiscopalChurchContent />
        )}
      </div>
    </div>
  )
}

export default EpiscopalChurch
