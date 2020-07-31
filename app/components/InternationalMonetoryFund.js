import React, { useEffect, useState } from "react"

function InternationalMonetoryFund() {
  return (
    <>
      {" "}
      <div className="wrapper">
        <div className="box-2">
          <div className="logo">{/*
<picture>
              <source sizes="250px" srcSet="../assets/images/imf/logo--large.png 250w" media="(min-width: 1024px)" />
              <source sizes="200px" srcSet="../assets/images/imf/logo--small.png 200w" media="(min-width: 800px)" />
              <img srcSet="../assets/images/imf/logo--default.png 150w" alt="International Monetary Fund" />
            </picture>
*/}</div>
          <div className="content">
            <h1 className="title">International Monetary Fund (IMF)</h1>
            <h2 className="subtitle">Intranet</h2>
            <h3 className="dates"></h3>
            <h2 className="my-title">Lead User Experience (UX) Designer, User Interface (UI) Developer</h2>
            <p className="description"></p>
            <ul className="highlights">
              <li>Worked with business stakeholders to understand their vision and create a design which meets their expectations.</li>
              <li>Create pixel perfect SharePoint masterpages, page layouts, web parts, and apps that match existing design standards and branding requirements.</li>
            </ul>
            <p className="technologies"></p>
            <p className="tools"></p>
          </div>
        </div>
        <div className="box-1">{/*
<picture>
            <source sizes="540px" srcSet="../assets/images/imf/hero--large.jpg 540w" media="(min-width: 1200px)" />
            <source sizes="470px" srcSet="../assets/images/imf/hero--medium.jpg 470w" media="(min-width: 1024px)" />
            <source sizes="360px" srcSet="../assets/images/imf/hero--small.jpg 360w" media="(min-width: 800px)" />
            <img srcSet="../assets/images/imf/hero--default.jpg 320w" alt="International Monetary Fund" />
          </picture>
*/}</div>
      </div>
    </>
  )
}

export default InternationalMonetoryFund
