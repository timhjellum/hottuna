import React, { useEffect, useState } from "react"
import Modal from "./Modal"
import useViewport from "./useViewport"
import DisneyNav from "./DisneyNav"
import DisneyHoneymoonsContent from "./DisneyHoneymoonsContent"
const disneyHoneymoonsLogoLarge = "../assets/images/disney-honeymoons/logo--large.png 250w"
const disneyHoneymoonsLogoSmall = "../assets/images/disney-honeymoons/logo--small.png 200w"
const disneyHoneymoonsLogoDefault = "../assets/images/disney-honeymoons/logo--default.png 150w"
const disneyHoneymoonsHeroLarge = "../assets/images/disney-honeymoons/hero--large.jpg 540w"
const disneyHoneymoonsHeroMedium = "../assets/images/disney-honeymoons/hero--medium.jpg 470w"
const disneyHoneymoonsHeroSmall = "../assets/images/disney-honeymoons/hero--small.jpg 360w"
const disneyHoneymoonsHeroDefault = "../assets/images/disney-honeymoons/hero--default.jpg 320w"
function DisneyHoneymoons(props) {
  let alt = "Disney Honeymoons"
  const { width } = useViewport()
  const breakpoint = 400
  return (
    <div className="disney-honeymoons">
      <div className="wrapper">
        <div className="box-1">
          <div className="logo">
            <picture>
              <source sizes="540px" srcSet={disneyHoneymoonsLogoLarge} media="(min-width: 1024px)" />
              <source sizes="360px" srcSet={disneyHoneymoonsLogoSmall} media="(min-width: 800px)" />
              <img srcSet={disneyHoneymoonsLogoDefault} alt={alt} />
            </picture>
          </div>
          <div className="content">
            <h1>{alt}</h1>
            <h2 className="subtitle">
              <a href="http://disneyweddings.disney.go.com/honeymoons" target="_blank">
                disneyhoneymoons.com
              </a>
            </h2>
            <h3 className="dates">September 2007 - January 2009</h3>
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
              <DisneyHoneymoonsContent />
            </Modal>
          ) : (
            <DisneyHoneymoonsContent />
          )}
        </div>
        <DisneyNav />
      </div>
    </div>
  )
}

export default DisneyHoneymoons
