import React, { useEffect, useState } from "react"

function Diginext() {
  return (
    <div className="wrapper">
      <div className="box-2">
        <div className="logo">{/*
<picture>
            <source sizes="250px" srcSet="../assets/images/diginext/logo--large.png 250w" media="(min-width: 1024px)" />
            <source sizes="200px" srcSet="../assets/images/diginext/logo--small.png 200w" media="(min-width: 800px)" />
            <img srcSet="../assets/images/diginext/logo--default.png 150w" alt="diginext" />
          </picture>
*/}</div>
        <div className="text-content">
          <h1 className="title">Diginext</h1>
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
      <div className="box-1">{/*
<picture>
          <source sizes="540px" srcSet="../assets/images/diginext/hero--large.jpg 540w" media="(min-width: 1200px)" />
          <source sizes="470px" srcSet="../assets/images/diginext/hero--medium.jpg 470w" media="(min-width: 1024px)" />
          <source sizes="360px" srcSet="../assets/images/diginext/hero--small.jpg 360w" media="(min-width: 800px)" />
          <img srcSet="../assets/images/diginext/hero--default.jpg 320w" alt="Diginext Films" />
        </picture>
*/}</div>
    </div>
  )
}

export default Diginext
