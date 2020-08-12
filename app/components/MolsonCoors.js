import React, { useEffect, useState } from "react"
import Modal from "./Modal"
import useViewport from "./useViewport"
import MolsonCoorsContent from "./MolsonCoorsContent"
require("svg-url-loader!../assets/images/molson-coors/logo.svg")
function MolsonCoors(props) {
  let alt = "Molson | Coors Intranet Merge"
  const { width } = useViewport()
  const breakpoint = 400
  return (
    <div name="molson-coors" className="section molson-coors">
      <div className="wrapper">
        <div className="box-1">
          <div className="logo"></div>
          <div className="content">
            <h1>{alt}</h1>
            <h2 className="subtitle">Intranet</h2>
            <h3 className="dates">April 2009 â€“ November 2009</h3>
            <h2 className="my-title">Lead User Experience (UX) Designer, Interactive Designer (ID) &#38; User Interface (UI) Developer</h2>
            <p className="description">Brought on to oversee the design, organization, and overall user-experience of the Coors and Molson intranet merge.</p>
            <ul className="highlights">
              <li>Worked with business stakeholders to understand their vision and create a design which meets their expectations.</li>
              <li>Perform a content inventory and facilitate migration strategy sessions to ensure all content is organized and transitioned successfully.</li>
              <li>Oversaw all aspects of an end-to-end user experience leveraging an iterative user-centered design process</li>
              {/*
  <li>Implement localization (multi-language support) for international users.</li>
  <li>Facilitate requirements gathering sessions with business stakeholders inorder to build a highly detailed site maps and wireframes.</li>
  <li>Liaison between the information technology and corporate brand identity teams to assure a fluid implementation of the creative design that meets all expectations.</li>
  <li>Perform a comprehensive product and services content audit and organize into a user-centric taxonomy.</li>
  <li>Facilitate persona workshops and produce representative users and groups.</li>

			  */}
            </ul>
            <p className="technologies"></p>
            <p className="tools"></p>
          </div>
        </div>
        <div className="box-2">
          {width < breakpoint ? (
            <Modal>
              <MolsonCoorsContent />
            </Modal>
          ) : (
            <MolsonCoorsContent />
          )}
        </div>
      </div>
    </div>
  )
}

export default MolsonCoors
