import React, { useEffect, useState } from "react"
const fastsignsLogoLarge = "../assets/images/fastsigns/logo--large.png 250w"
const fastsignsLogoSmall = "../assets/images/fastsigns/logo--small.png 200w"
const fastsignsLogoDefault = "../assets/images/fastsigns/logo--default.png 150w"
const fastsignsHeroLarge = "../assets/images/fastsigns/hero--large.jpg 540w"
const fastsignsHeroMedium = "../assets/images/fastsigns/hero--medium.jpg 470w"
const fastsignsHeroSmall = "../assets/images/fastsigns/hero--small.jpg 360w"
const fastsignsHeroDefault = "../assets/images/fastsigns/hero--default.jpg 320w"
function Fastsigns() {
  let alt = "FASTSIGNS"
  return (
    <div className="wrapper">
      <div className="box-1">
        <div className="logo">
          {" "}
          <picture>
            <source sizes="540px" srcSet={fastsignsLogoLarge} media="(min-width: 1024px)" />
            <source sizes="360px" srcSet={fastsignsLogoSmall} media="(min-width: 800px)" />
            <img srcSet={fastsignsLogoDefault} alt={alt} />
          </picture>
        </div>
        <div className="text-content">
          <h1>{alt}</h1>
          <h2 className="subtitle">
            <a href="http://www.fastsigns.com" target="_blank">
              fastsigns.com
            </a>
          </h2>
          <h3 className="dates">August 2008 â€“ January 2009</h3>
          <h2 className="my-title">Lead Information Architect (IA) & User Experience (UX) Designer</h2>
          <p className="description">
            One of my favorite projects, FASTSIGNS wanted to create a website that introduced new visitors to the product and services offerings, allow users to expand on their ideas, and also let their power-users access the tools to get the job done.
            {/*
	  put this in some sort of exansion 
	allow inventories all of FASTSIGNS products and services and developed a comprehensive taxonomy. From this a matrix was created which cross-referenced similar product and service offerings, and also popular offerings that had been identified by franchises. Additionally an extensive persona study was completed which allowed further insight and direction into the users' motivations. The end result allowed users to explore solutions by event or product type, or go directly to a solution and begin to design.
	  */}
          </p>
          <div className="css_bar_graph">
            <ul className="x_axis">
              <li>Requirements</li>
              <li>Sitemaps</li>
              <li>Wireframes</li>
              <li>Personas</li>
              <li>Taxonomy</li>
            </ul>
            <div className="graph">
              <ul>
                <li className="bar nr_1 blue" style={{ height: "30px" }}>
                  <div className="top"></div>
                  <div className="bottom"></div>
                  <span>15%</span>
                </li>
                <li className="bar nr_2 green" style={{ height: "40px" }}>
                  <div className="top"></div>
                  <div className="bottom"></div>
                  <span>20%</span>
                </li>
                <li className="bar nr_3 orange" style={{ height: "70px" }}>
                  <div className="top"></div>
                  <div className="bottom"></div>
                  <span>35%</span>
                </li>
                <li className="bar nr_4 purple" style={{ height: "30px" }}>
                  <div className="top"></div>
                  <div className="bottom"></div>
                  <span>15%</span>
                </li>
                <li className="bar nr_5 red" style={{ height: "50px" }}>
                  <div className="top"></div>
                  <div className="bottom"></div>
                  <span>25%</span>
                </li>
              </ul>
            </div>
            <div className="label">How I was utilized</div>
          </div>

          {/*
  p className="description">Website redesign, content restructure, and user-experience enhancements.</p>
<ul className="highlights">
  <li>Developed a detailed product grouping and classification system based on the users' needs.</li>
  <li>Perform a content inventory and facilitate migration strategy sessions to ensure all content is organized and transitioned successfully.</li>
  <li>Perform a comprehensive product and services content audit and organize into a user-centric taxonomy.</li>
  <li>Facilitate requirements gathering sessions with business stakeholders inorder to build a highly detailed site maps and wireframes.</li>
  <li>Facilitate persona workshops and produce representative users and groups.</li>
</ul
	  */}
          <p className="technologies"></p>
          <p className="tools"></p>
        </div>
      </div>
      <div className="box-2">
        {" "}
        <div className="wrapper">
          <div className="content">
            <picture>
              <source sizes="540px" srcSet={fastsignsHeroLarge} media="(min-width: 1200px)" />
              <source sizes="470px" srcSet={fastsignsHeroMedium} media="(min-width: 1024px)" />
              <source sizes="360px" srcSet={fastsignsHeroSmall} media="(min-width: 800px)" />
              <img srcSet={fastsignsHeroDefault} alt={alt} />
            </picture>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Fastsigns
