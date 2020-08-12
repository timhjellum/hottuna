import React, { useEffect, useState } from "react"
import Modal from "./Modal"
import useViewport from "./useViewport"
import MastercardContent from "./MastercardContent"
require("svg-url-loader!../assets/images/mastercard/logo.svg")
function Mastercard(props) {
  let alt = "MasterCard"
  const { width } = useViewport()
  const breakpoint = 400
  return (
    <div name="mastercard" className="section mastercard">
      <div className="wrapper">
        <div className="box-1">
          <div className="logo"></div>
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
    </div>
  )
}

export default Mastercard
