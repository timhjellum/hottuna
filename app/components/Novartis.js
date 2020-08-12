import React, { useEffect, useState } from "react"
import Modal from "./Modal"
import useViewport from "./useViewport"
import NovartisContent from "./NovartisContent"
require("svg-url-loader!../assets/images/novartis/logo.svg")
function Novartis(props) {
  let alt = "Novartis Pharmaceuticals"
  const { width } = useViewport()
  const breakpoint = 400
  return (
    <div name="novartis" className="section novartis">
      <div className="wrapper">
        <div className="box-1">
          <div className="logo"></div>
          <div className="content">
            <h1>{alt}</h1>
            <h2 className="subtitle">
              <a href="http://www.nibr.com" target="_blank">
                nibr.com
              </a>
            </h2>
            <h3 className="dates">June 2011 â€“ November 2011</h3>
            <h2 className="my-title">Lead User Experience (UX) Designer, Interactive Designer (ID) &#38; User Interface (UI) Developer</h2>
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
              <NovartisContent />
            </Modal>
          ) : (
            <NovartisContent />
          )}
        </div>
      </div>
    </div>
  )
}

export default Novartis
