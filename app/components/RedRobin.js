import React, { useEffect, useState } from "react"
import Modal from "./Modal"
import useViewport from "./useViewport"
import RedRobinContent from "./RedRobinContent"
require("svg-url-loader!../assets/images/red-robin/logo.svg")
function RedRobin(props) {
  let alt = "Red Robin Gourmet Hamburgers"
  const { width } = useViewport()
  const breakpoint = 400
  return (
    <div name="red-robin" className="section red-robin">
      <div className="wrapper">
        <div className="box-1">
          <div className="logo"></div>
          <div className="text-content">
            <h1>{alt}</h1>
            <h2 className="subtitle">Websites, extranets &#38; Intranets</h2>
            <h2 className="vertical">Casual Dining Restaurant</h2>
            <h3 className="dates">January 2009 â€“ April 2009</h3>
            <h2 className="my-title">Lead User Experience (UX) Designer &#38; User Interface (UI) Developer</h2>
            <p className="description">Custom .NET employee and talent profile sharing application. My role was to create the design (look and feel), establish the information architecture, and develop the user interface.</p>
            <ul className="highlights">
              <li>Create beautiful site designs by initiating an iterative interactive design process and close collaboration with stakeholders.</li>
              <li>Oversaw all aspects of an end-to-end user experience leveraging an iterative user-centered design process</li>
              <li>Develop a scalable solution that is responsive and adaptive to various media types leveraging user interface best practices.</li>
            </ul>
            <p className="technologies"></p>
            <p className="tools"></p>
          </div>
        </div>
        <div className="box-2">
          {width < breakpoint ? (
            <Modal>
              <RedRobinContent />
            </Modal>
          ) : (
            <RedRobinContent />
          )}
        </div>
      </div>
    </div>
  )
}

export default RedRobin
