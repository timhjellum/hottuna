import React, { useEffect, useState } from "react"
import Modal from "./Modal"
import useViewport from "./useViewport"
import DisneyNav from "./DisneyNav"
import DisneyWeddingsContent from "./DisneyWeddingsContent"
const disneyWeddingsLogoLarge = "../assets/images/disney-weddings/logo--large.png 250w"
const disneyWeddingsLogoSmall = "../assets/images/disney-weddings/logo--small.png 200w"
const disneyWeddingsLogoDefault = "../assets/images/disney-weddings/logo--default.png 150w"
const disneyWeddingsHeroLarge = "../assets/images/disney-weddings/hero--large.jpg 540w"
const disneyWeddingsHeroMedium = "../assets/images/disney-weddings/hero--medium.jpg 470w"
const disneyWeddingsHeroSmall = "../assets/images/disney-weddings/hero--small.jpg 360w"
const disneyWeddingsHeroDefault = "../assets/images/disney-weddings/hero--default.jpg 320w"
function DisneyWeddings(props) {
  let alt = "Disney Weddings"
  const { width } = useViewport()
  const breakpoint = 400
  return (
    <div className="disney-weddings">
      <div className="wrapper">
        <div className="box-1">
          <div className="logo">
            <picture>
              <source sizes="540px" srcSet={disneyWeddingsLogoLarge} media="(min-width: 1024px)" />
              <source sizes="360px" srcSet={disneyWeddingsLogoSmall} media="(min-width: 800px)" />
              <img srcSet={disneyWeddingsLogoDefault} alt={alt} />
            </picture>
          </div>
          <div className="content">
            <h1>{alt}</h1>
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
        <div className="box-2">
          {width < breakpoint ? (
            <Modal>
              <DisneyWeddingsContent />
            </Modal>
          ) : (
            <DisneyWeddingsContent />
          )}
        </div>
        <DisneyNav />
      </div>
    </div>
  )
}

export default DisneyWeddings
