import React, { useEffect, useState } from "react"

function EpiscopalChurch() {
  return (
    <div className="wrapper">
      <div className="box-2">
        <div className="logo">{/*
<picture>
            <source sizes="250px" srcSet="../assets/images/episcopal-church/logo--large.png 250w" media="(min-width: 1024px)" />
            <source sizes="200px" srcSet="../assets/images/episcopal-church/logo--small.png 200w" media="(min-width: 800px)" />
            <img srcSet="../assets/images/episcopal-church/logo--default.png 150w" alt="" />
          </picture>
*/}</div>
        <div className="text-content">
          <h1 className="title">Episcopal Church</h1>
          <h2 className="subtitle">
            <a href="https://www.churchpublishing.org/">churchpublishing.org</a>
          </h2>
          <h3 className="dates">September 2010 â€“ June 2011</h3>
          <h2 className="my-title">Lead User Experience (UX) Designer, Interactive Designer (ID) &#38; User Interface (UI) Developer</h2>
          <p className="description"></p>
          <ul className="highlights">
            <li>Worked with business stakeholders to understand their vision and create a design which meets their expectations.</li>
            <li>Perform a content inventory and facilitate migration strategy sessions to ensure all content is organized and transitioned successfully.</li>
            <li>Oversaw all aspects of an end-to-end user experience leveraging an iterative user-centered design process</li>
            <li>Implement localization for international users.</li>
          </ul>
          <p className="technologies"></p>
          <p className="tools"></p>
        </div>
      </div>
      <div className="box-1">{/*
<picture>
          <source sizes="540px" srcSet="../assets/images/episcopal-church/hero--large.jpg 540w" media="(min-width: 1200px)" />
          <source sizes="470px" srcSet="../assets/images/episcopal-church/hero--medium.jpg 470w" media="(min-width: 1024px)" />
          <source sizes="360px" srcSet="../assets/images/episcopal-church/heroh--small.jpg 360w" media="(min-width: 800px)" />
          <img srcSet="../assets/images/episcopal-church/hero--default.jpg 320w" alt="" />
        </picture>
*/}</div>
    </div>
  )
}

export default EpiscopalChurch
