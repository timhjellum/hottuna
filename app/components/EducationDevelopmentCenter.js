import React, { useEffect, useState } from "react"

function EducationDevelopmentCenter() {
  return (
    <div className="wrapper">
      <div className="box-2">
        <div className="logo">{/*
<picture>
            <source sizes="250px" srcSet="../assets/images/edc/logo--large.png 250w" media="(min-width: 1024px)" />
            <source sizes="200px" srcSet="../assets/images/edc/logo--small.png 200w" media="(min-width: 800px)" />
            <img srcSet="../assets/images/edc/logo--default.png 150w" alt="" />
          </picture>
*/}</div>
        <div className="text-content">
          <h1 className="title">Education Development Center (EDC)</h1>
          <h2 className="subtitle">Intranet</h2>
          <h3 className="dates">May 2016 - Jan 2017</h3>
          <h2 className="subtitle"></h2>
          <h3 className="dates"></h3>
          <h2 className="my-title">Lead User Experience (UX) Designer &#38; User Interface (UI) Developer</h2>
          <p className="description">EDC Intranet Migration to Microsoft SharePoint Cloud &#38; Office 356</p>
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
          <source sizes="540px" srcSet="../assets/images/edc/hero--large.jpg 540w" media="(min-width: 1200px)" />
          <source sizes="470px" srcSet="../assets/images/edc/hero--medium.jpg 470w" media="(min-width: 1024px)" />
          <source sizes="360px" srcSet="../assets/images/edc/hero--small.jpg 360w" media="(min-width: 800px)" />
          <img srcSet="../assets/images/edc/hero--default.jpg 320w" alt="" />
        </picture>
*/}</div>
    </div>
  )
}

export default EducationDevelopmentCenter
