import React, { useEffect, useState } from "react"

function Mastercard() {
  return (
    <div className="wrapper">
      <div className="box-2">
        <div className="logo">{/*
<picture>
            <source sizes="250px" srcSet="../assets/images/mastercard/logo--large.png 250w" media="(min-width: 1024px)" />
            <source sizes="200px" srcSet="../assets/images/mastercard/logo--small.png 200w" media="(min-width: 800px)" />
            <img srcSet="../assets/images/mastercard/logo--default.png 150w" alt="" />
          </picture>
*/}</div>
        <div className="content">
          <h1 className="title">MasterCard</h1>
          <h2 className="subtitle">Intranet</h2>
          <h3 className="dates">March 2012 â€“ October 2012</h3>
          <h2 className="my-title">Lead User Interface (UI) Developer</h2>
          <p className="description">Managed an off-shore development team for user-interface adherence, design and user-experience standards</p>
          <ul className="highlights">
            <li>Worked with business stakeholders to understand their vision and create a design which meets their expectations.</li>
          </ul>
          <p className="technologies"></p>
          <p className="tools"></p>
        </div>
      </div>
      <div className="box-1">{/*
<picture>
          <source sizes="540px" srcSet="../assets/images/mastercard/hero--large.png 540w" media="(min-width: 1200px)" />
          <source sizes="470px" srcSet="../assets/images/mastercard/hero--medium.jpg 470w" media="(min-width: 1024px)" />
          <source sizes="360px" srcSet="../assets/images/mastercard/hero--small.jpg 360w" media="(min-width: 800px)" />
          <img srcSet="../assets/images/mastercard/hero--default.jpg 320w" alt="" />
        </picture>
*/}</div>
    </div>
  )
}

export default Mastercard
