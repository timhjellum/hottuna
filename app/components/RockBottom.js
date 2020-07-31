import React, { useEffect, useState } from "react"

function RockBottom() {
  return (
    <div className="wrapper">
      <div className="box-2">
        <div className="logo">{/*
<picture>
            <source sizes="250px" srcSet="../assets/images/rock-bottom/logo--large.png 250w" media="(min-width: 1024px)" />
            <source sizes="200px" srcSet="../assets/images/rock-bottom/logo--small.png 200w" media="(min-width: 800px)" />
            <img srcSet="../assets/images/rock-bottom/logo--default.png 150w" alt="" />
          </picture>
*/}</div>
        <div className="text-content">
          <h1 className="title">Rock Bottom</h1>
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
      <div className="box-1">{/*
<picture>
          <source sizes="540px" srcSet="../assets/images/rock-bottom/hero--large.jpg 540w" media="(min-width: 1200px)" />
          <source sizes="470px" srcSet="../assets/images/rock-bottom/hero--medium.jpg 470w" media="(min-width: 1024px)" />
          <source sizes="360px" srcSet="../assets/images/rock-bottom/hero--small.jpg 360w" media="(min-width: 800px)" />
          <img srcSet="../assets/images/rock-bottom/hero--default.jpg 320w" alt="" />
        </picture>
*/}</div>
    </div>
  )
}

export default RockBottom
