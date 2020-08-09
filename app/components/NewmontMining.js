import React, { useEffect, useState } from "react"
import Modal from "./Modal"
import useViewport from "./useViewport"
import NewmontMiningContent from "./NewmontMiningContent"
const newmontMiningLogoLarge = "../assets/images/newmont-mining/logo--large.png 250w"
const newmontMiningLogoSmall = "../assets/images/newmont-mining/logo--small.png 200w"
const newmontMiningLogoDefault = "../assets/images/newmont-mining/logo--default.png 150w"
function NewmontMining(props) {
  let alt = "Newmont Mining"
  const { width } = useViewport()
  const breakpoint = 400
  return (
    <div className="wrapper">
      <div className="box-1">
        <div className="logo">
          <picture>
            <source sizes="540px" srcSet={newmontMiningLogoLarge} media="(min-width: 1024px)" />
            <source sizes="360px" srcSet={newmontMiningLogoSmall} media="(min-width: 800px)" />
            <img srcSet={newmontMiningLogoDefault} alt={alt} />
          </picture>
        </div>
        <div className="text-content">
          <h1>{alt}</h1>
          <h2 className="subtitle">Intranet &#38; Extranet</h2>
          <h3 className="dates">September 2010 â€“ June 2011</h3>
          <h2 className="my-title">Lead User Experience (UX) Designer, Interactive Designer (ID) &#38; User Interface (UI) Developer</h2>
          <p className="description"></p>
          <ul className="highlights">
            <li>Worked with business stakeholders to understand their vision and create a design which meets their expectations.</li>
            <li>Perform a content inventory and facilitate migration strategy sessions to ensure all content is organized and transitioned successfully.</li>
            <li>Oversaw all aspects of an end-to-end user experience leveraging an iterative user-centered design process</li>
            <li>Implement localization (multi-language support) for international users.</li>
          </ul>
          <p className="technologies"></p>
          <p className="tools"></p>
        </div>
      </div>
      <div className="box-2">
        {width < breakpoint ? (
          <Modal>
            <NewmontMiningContent />
          </Modal>
        ) : (
          <NewmontMiningContent />
        )}
      </div>
    </div>
  )
}

export default NewmontMining
