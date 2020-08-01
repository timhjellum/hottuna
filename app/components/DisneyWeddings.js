import React, { useEffect, useState } from "react"

function DisneyWeddings() {
  return (
    <div className="slide">
      <div className="wrapper">
        <div className="box-2">
          <div className="logo">{/*
<picture>
                <source sizes="250px" srcSet="../assets/images/disney/logo-01--large.png 250w" media="(min-width: 1024px)" />
                <source sizes="200px" srcSet="../assets/images/disney/logo-01--small.png 200w" media="(min-width: 800px)" />
                <img srcSet="../assets/images/disney/logo-01--default.png 150w" alt="Walt Disney Weddings" />
              </picture>
*/}</div>
          <div className="content">
            <h1 className="title">Walt Disney Weddings</h1>
            <h2 className="subtitle">
              <a href="https://www.disneyweddings.com/" target="_blank">
                disneyweddings.com
              </a>
            </h2>
            <h3 className="dates">September 2007 â€“ January 2009</h3>
            <h2 className="my-title">Lead Information Architect (IA) & User Experience (UX) Designer</h2>
            <p className="description"></p>
            <ul className="highlights">
              <li>Lead requirement and Ideation, along with an extensive persona workshop, which produced highly detailed design artifacts.</li>
              <li>Was able to capture the Disney Experience, a high level dream and explore, and detailed plan and initiate user paths.</li>
              <li>Clients were extremely happy with the overall process and results.</li>
            </ul>
            <p className="technologies"></p>
            <p className="tools"></p>
          </div>
        </div>
        <div className="box-1">{/*
<picture>
              <source sizes="540px" srcSet="../assets/images/disney/hero-01--large.jpg 540w" media="(min-width: 1200px)" />
              <source sizes="470px" srcSet="../assets/images/disney/hero-01--medium.jpg 470w" media="(min-width: 1024px)" />
              <source sizes="360px" srcSet="../assets/images/disney/hero-01--small.jpg 360w" media="(min-width: 800px)" />
              <img srcSet="../assets/images/disney/hero-01--small.jpg 320w" alt="Walt Disney Weddings" />
            </picture>
*/}</div>
      </div>
    </div>
  )
}

export default DisneyWeddings
