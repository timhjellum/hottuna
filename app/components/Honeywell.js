import React, { useEffect, useState } from "react"

function Honeywell() {
  return (
    <>
      {" "}
      <div className="wrapper">
        <div className="box-2">
          <div className="logo">{/*
<picture>
              <source sizes="250px" srcSet="../assets/images/honeywell/logo--large.png 250w" media="(min-width: 1024px)" />
              <source sizes="200px" srcSet="../assets/images/honeywell/logo--small.png 200w" media="(min-width: 800px)" />
              <img srcSet="../assets/images/honeywell/logo--default.png 150w" alt="" />
            </picture>
*/}</div>
          <div className="text-content">
            <h1 className="title">Honeywell</h1>
            <h2 className="subtitle">Websites, Extranets &#38; Intranets; Desktop to Tablet (Responsive Design) + User Interface Technology Consolidation</h2>
            <h3 className="dates"></h3>
            <h2 className="my-title">Lead User Experience (UX) Designer, Interactive Designer (ID) &#38; User Interface (UI) Developer</h2>
            <p className="description">Tasked to convert Honeywell's web-based systems to conform to tablet specifications. As part of this effort, Honeywell wanted to consolidate their various existing front-end technologies, and propose a scalable and universal solution to be retrofit into existing systems, and leveraged in all future systems. Lastly I directed an off-shore development team tasked with the to implemention of the user-interfaces.</p>
            {/*
  ul className="highlights">
  <li>Decreased development time and costs by standardizing front-end libraries and reusable code-base.</li>
  <li>Increased site performance by reducing HTML, CSS, and scripts bloat; standardized image and icons, including sprites; and established a standardized User-interface guidelines.</li>
</ul
		  */}
          </div>
        </div>
        <div className="box-1">{/*
<picture>
            <source sizes="540px" srcSet="../assets/images/honeywell/hero--large.png 540w" media="(min-width: 1200px)" />
            <source sizes="470px" srcSet="../assets/images/honeywell/hero--medium.png 470w" media="(min-width: 1024px)" />
            <source sizes="360px" srcSet="../assets/images/honeywell/hero--small.png 360w" media="(min-width: 800px)" />
            <img srcSet="../assets/images/honeywell/hero--default.png 320w" alt="Honeywell" />
          </picture>
*/}</div>
      </div>
    </>
  )
}

export default Honeywell
