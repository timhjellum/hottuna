import React, { useEffect, useState } from "react"
const redRobinLogoLarge = "../assets/images/red-robin/logo--large.png 250w"
const redRobinLogoSmall = "../assets/images/red-robin/logo--small.png 200w"
const redRobinLogoDefault = "../assets/images/red-robin/logo--default.png 150w"
const redRobinHeroLarge = "../assets/images/red-robin/hero--large.jpg 540w"
const redRobinHeroMedium = "../assets/images/red-robin/hero--medium.jpg 470w"
const redRobinHeroSmall = "../assets/images/red-robin/hero--small.jpg 360w"
const redRobinHeroDefault = "../assets/images/red-robin/hero--default.jpg 320w"
function RedRobin() {
  let alt = "Red Robin Gourmet Hamburgers"
  return (
    <>
      <div className="wrapper">
        <div className="box-1">
          <div className="logo">
            {" "}
            <picture>
              <source sizes="540px" srcSet={redRobinLogoLarge} media="(min-width: 1024px)" />
              <source sizes="360px" srcSet={redRobinLogoSmall} media="(min-width: 800px)" />
              <img srcSet={redRobinLogoDefault} alt={alt} />
            </picture>
          </div>
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
          {" "}
          <div className="wrapper">
            <div className="content">
              <picture>
                <source sizes="540px" srcSet={redRobinHeroLarge} media="(min-width: 1200px)" />
                <source sizes="470px" srcSet={redRobinHeroMedium} media="(min-width: 1024px)" />
                <source sizes="360px" srcSet={redRobinHeroSmall} media="(min-width: 800px)" />
                <img srcSet={redRobinHeroDefault} alt={alt} />
              </picture>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default RedRobin
