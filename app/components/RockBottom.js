import React, { useEffect, useState } from "react"
const rockBottomLogoLarge = "../assets/images/rock-bottom/logo--large.png 250w"
const rockBottomLogoSmall = "../assets/images/rock-bottom/logo--small.png 200w"
const rockBottomLogoDefault = "../assets/images/rock-bottom/logo--default.png 150w"
const rockBottomHeroLarge = "../assets/images/rock-bottom/hero--large.jpg 540w"
const rockBottomHeroMedium = "../assets/images/rock-bottom/hero--medium.jpg 470w"
const rockBottomHeroSmall = "../assets/images/rock-bottom/hero--small.jpg 360w"
const rockBottomHeroDefault = "../assets/images/rock-bottom/hero--default.jpg 320w"
function RockBottom() {
  let alt = "Rock Bottom"
  return (
    <div className="wrapper">
      <div className="box-1">
        <div className="logo">
          <picture>
            <source sizes="540px" srcSet={rockBottomLogoLarge} media="(min-width: 1024px)" />
            <source sizes="360px" srcSet={rockBottomLogoSmall} media="(min-width: 800px)" />
            <img srcSet={rockBottomLogoDefault} alt={alt} />
          </picture>
        </div>
        <div className="text-content">
          <h1>{alt}</h1>
          <h2 className="subtitle">Intranet &#38; Extranet</h2>
          <h3 className="dates">September 2010 â€“ June 2011</h3>
          <h2 className="my-title">Lead User Experience (UX) Designer, Interactive Designer (ID) &#38; User Interface (UI) Developer</h2>
          <p className="description"></p>
          <div className="css_bar_graph">
            <ul className="x_axis">
              <li>Ideation</li>
              <li>Sitemaps</li>
              <li>Wireframes</li>
            </ul>
            <div className="graph">
              <ul>
                <li className="bar nr_1 blue" style={{ height: "25px" }}>
                  <div className="top"></div>
                  <div className="bottom"></div>
                  <span>20%</span>
                </li>
                <li className="bar nr_2 green" style={{ height: "75px" }}>
                  <div className="top"></div>
                  <div className="bottom"></div>
                  <span>40%</span>
                </li>
                <li className="bar nr_3 orange" style={{ height: "75px" }}>
                  <div className="top"></div>
                  <div className="bottom"></div>
                  <span>40%</span>
                </li>
              </ul>
            </div>
            <div className="label">How I was utilized</div>
          </div>
        </div>
      </div>
      <div className="box-2">
        {" "}
        <div className="wrapper">
          <div className="content">
            <picture>
              <source sizes="540px" srcSet={rockBottomHeroLarge} media="(min-width: 1200px)" />
              <source sizes="470px" srcSet={rockBottomHeroMedium} media="(min-width: 1024px)" />
              <source sizes="360px" srcSet={rockBottomHeroSmall} media="(min-width: 800px)" />
              <img srcSet={rockBottomHeroDefault} alt={alt} />
            </picture>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RockBottom
