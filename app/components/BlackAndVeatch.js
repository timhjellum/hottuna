import React from "react"

import BlackAndVeatchContent from "./BlackAndVeatchContent"

function BlackAndVeatch(props) {
  let alt = "Black and Veatch"
  require("svg-url-loader!../assets/images/black-and-veatch/logo--default.svg")

  return (
    <div className="black-and-veatch">
      <div className="wrapper">
        <div className="box-1">
          <div className="logo"></div>
          <div className="text-content">
            <h1>{alt}</h1>
            <h3 className="dates"></h3>
            <h2 className="my-title">Lead SharePoint User Interface Developer</h2>
            <p className="description">Engaged mid-project to remedy and implement the branding and design of a SharePoint implementation.</p>
            <ul className="highlights">
              <li>Provided best practices for SharePoint file and folder structure to allow for a scalable solution for content editing</li>
              <li>Rectified and implemented a pixel perfect design including masterpages, page layouts, web-parts, themes and templates</li>
              <li>Managed an off-shore development team tasked to migrate all content and duplicate existing functionality into a .NET environment</li>
            </ul>
            <p className="technologies"></p>
            <p className="tools"></p>
          </div>
        </div>
        <div className="box-2">
          <BlackAndVeatchContent />
        </div>
      </div>
    </div>
  )
}

export default BlackAndVeatch
