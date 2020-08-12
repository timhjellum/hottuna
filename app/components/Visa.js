import React, { useEffect, useState } from "react"
import Modal from "./Modal"
import useViewport from "./useViewport"
import VisaContent from "./VisaContent"
require("svg-url-loader!../assets/images/visa/logo.svg")
function Visa(props) {
  let alt = "Visa"
  const { width } = useViewport()
  const breakpoint = 400
  return (
    <div name="visa" className="visa section">
      <div className="wrapper">
        <div className="box-1">
          <div className="logo"></div>
          <div className="content">
            <h1>{alt}</h1>
            <h2 className="subtitle">Websites, Extranets &#38; Intranets; Browser Compatability Project</h2>
            <h3 className="dates">&lt;2011&gt;</h3>
            <h2 className="my-title">Lead User Interface (UI) / Front-End Developer</h2>
            <p className="description">Responsible for the remediation of various VISA online applications to allow for users to access and leverage tools and online products across all browsers.</p>
          </div>
        </div>
        <div className="box-2">
          {width < breakpoint ? (
            <Modal>
              <VisaContent />
            </Modal>
          ) : (
            <VisaContent />
          )}
        </div>
      </div>
    </div>
  )
}

export default Visa
