import React, { useEffect, useState } from "react"

function BlackAndVeatch() {
  return (
    <div className="wrapper">
      <div className="box-2">
        <div className="logo">{/*
<picture>
            <source sizes="250px" srcSet="../assets/images/black-and-veatch/logo--large.png 250w" media="(min-width: 1024px)" />
            <source sizes="200px" srcSet="../assets/images/black-and-veatch/logo--small.png 200w" media="(min-width: 800px)" />
            <img srcSet="../assets/images/black-and-veatch/logo--default.png 150w" alt="Black and Veatch" />
          </picture>
*/}</div>
        <div className="text-content">
          <h1 className="title">Black and Veatch</h1>
          <h3 className="dates"></h3>
          <h2 className="my-title">Lead SharePoint User Interface Developer</h2>
          <p className="description">Engaged mid-project to remedy and implement the branding and design of a SharePoint implementation.</p>
          <ul className="highlights">
            <li>Provided best practices for SharePoint file and folder structure to allow for a scalable solution for content editing</li>
            <li>Rectified and implemented a pixel perfect design including masterpages, page layouts, web-parts, themes and templates</li>
            <li>Managed an off-shore development team tasked to migrate all content and duplicate existing functionality into a .NET environment</li>
          </ul>
          <p className="technologies"></p>
          <p className="tools"></p>
        </div>
      </div>
      <div className="box-1">{/*
<picture>
          <source sizes="540px" srcSet="../assets/images/black-and-veatch/hero--large.jpg 540w" media="(min-width: 1200px)" />
          <source sizes="470px" srcSet="../assets/images/black-and-veatch/hero--medium.jpg 470w" media="(min-width: 1024px)" />
          <source sizes="360px" srcSet="../assets/images/black-and-veatch/hero--small.jpg 360w" media="(min-width: 800px)" />
          <img srcSet="../assets/images/black-and-veatch/hero--default.jpg 320w" alt="Black and Veatch" />
        </picture>
*/}</div>
    </div>
  )
}

export default BlackAndVeatch
