import React, { useEffect, useState } from "react"
const disneyMapssLogoLarge = "../assets/images/disney-maps/logo--large.png 250w"
const disneyMapssLogoSmall = "../assets/images/disney-maps/logo--small.png 200w"
const disneyMapssLogoDefault = "../assets/images/disney-maps/logo--default.png 150w"
const disneyMapsHeroLarge = "../assets/images/disney-maps/hero--large.jpg 540w"
const disneyMapsHeroMedium = "../assets/images/disney-maps/hero--medium.jpg 470w"
const disneyMapsHeroSmall = "../assets/images/disney-maps/hero--small.jpg 360w"
const disneyMapsHeroDefault = "../assets/images/disney-maps/hero--default.jpg 320w"
function DisneyMaps() {
  let alt = "Walt Disney Maps"
  return (
    <div className="wrapper">
      <div className="box-1">
        <div className="logo">
          <picture>
            <source sizes="540px" srcSet={disneyMapssLogoLarge} media="(min-width: 1024px)" />
            <source sizes="360px" srcSet={disneyMapssLogoSmall} media="(min-width: 800px)" />
            <img srcSet={disneyMapssLogoDefault} alt={alt} />
          </picture>
        </div>
        <div className="content">
          <h1>{alt}</h1>
          <h2 className="subtitle">
            <a href="https://disneyworld.disney.go.com/maps/" target="_blank">
              disney.com/maps
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
      <div className="box-2">
        <div className="wrapper">
          <div className="content">
            <picture>
              <source sizes="540px" srcSet={disneyMapsHeroLarge} media="(min-width: 1200px)" />
              <source sizes="470px" srcSet={disneyMapsHeroMedium} media="(min-width: 1024px)" />
              <source sizes="360px" srcSet={disneyMapsHeroSmall} media="(min-width: 800px)" />
              <img srcSet={disneyMapsHeroDefault} alt={alt} />
            </picture>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DisneyMaps
