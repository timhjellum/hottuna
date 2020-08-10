import React, { useEffect, useState } from "react"
import Modal from "./Modal"
import useViewport from "./useViewport"
import HoneywellContent from "./HoneywellContent"
require("svg-url-loader!../assets/images/honeywell/logo.svg")
function Honeywell(props) {
  let alt = "Honeywell"
  const { width } = useViewport()
  const breakpoint = 400
  return (
    <div className="wrapper">
      <div className="box-1">
        <div className="logo"></div>
        <div className="text-content">
          <h1>{alt}</h1>
          <h2 className="subtitle">Websites, Extranets &#38; Intranets; Desktop to Tablet (Responsive Design) + User Interface Technology Consolidation</h2>
          <h3 className="dates"></h3>
          <h2 className="my-title">Lead User Experience (UX) Designer, Interactive Designer (ID) &#38; User Interface (UI) Developer</h2>
          <p className="description">Tasked to convert Honeywell's web-based systems to conform to tablet specifications. As part of this effort, Honeywell wanted to consolidate their various existing front-end technologies, and propose a scalable and universal solution to be retrofit into existing systems, and leveraged in all future systems. Lastly I directed an off-shore development team tasked with the to implemention of the user-interfaces.</p>
          {/*
  ul className="highlights">
  <li>Decreased development time and costs by standardizing front-end libraries and reusable code-base.</li>
  <li>Increased site performance by reducing HTML, CSS, and scripts bloat; standardized image and icons, including sprites; and established a standardized User-interface guidelines.</li>
</ul
		  */}
        </div>
      </div>
      <div className="box-2">
        {width < breakpoint ? (
          <Modal>
            <HoneywellContent />
          </Modal>
        ) : (
          <HoneywellContent />
        )}
      </div>
    </div>
  )
}

export default Honeywell
