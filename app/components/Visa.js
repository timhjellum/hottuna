import React, { useEffect, useState } from "react"

function Visa() {
  return (
    <>
      {" "}
      <div className="wrapper">
        <div className="box-2">
          <div className="logo">{/*
<picture>
              <source sizes="250px" srcSet="../assets/images/visa/logo--large.png 250w" media="(min-width: 1024px)" />
              <source sizes="200px" srcSet="../assets/images/visa/logo--small.png 200w" media="(min-width: 800px)" />
              <img srcSet="../assets/images/visa/logo--default.png 150w" alt="" />
            </picture>
*/}</div>
          <div className="content">
            <h1 className="title">VISA</h1>
            <h2 className="subtitle">Websites, Extranets &#38; Intranets; Browser Compatability Project</h2>
            <h3 className="dates">&lt;2011&gt;</h3>
            <h2 className="my-title">Lead User Interface (UI) / Front-End Developer</h2>
            <p className="description">Responsible for the remediation of various VISA online applications to allow for users to access and leverage tools and online products across all browsers.</p>
          </div>
        </div>
        <div className="box-1">{/*
<picture>
            <source sizes="540px" srcSet="../assets/images/visa/hero--large.jpg 540w" media="(min-width: 1200px)" />
            <source sizes="470px" srcSet="../assets/images/visa/hero--medium.jpg 470w" media="(min-width: 1024px)" />
            <source sizes="360px" srcSet="../assets/images/visa/hero--small.jpg 360w" media="(min-width: 800px)" />
            <img srcSet="../assets/images/visa/hero--default.jpg 320w" alt="" />
          </picture>
*/}</div>
      </div>
    </>
  )
}

export default Visa
