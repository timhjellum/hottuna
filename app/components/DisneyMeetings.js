import React, { useEffect, useState } from "react"
import Modal from "./Modal"
import useViewport from "./useViewport"
import DisneyNav from "./DisneyNav"
import DisneyMeetingsContent from "./DisneyMeetingsContent"
const disneyMeetingsLogoLarge = "../assets/images/disney-meetings/logo--large.png 250w"
const disneyMeetingsLogoSmall = "../assets/images/disney-meetings/logo--small.png 200w"
const disneyMeetingsLogoDefault = "../assets/images/disney-meetings/logo--default.png 150w"
const disneyMeetingsHeroLarge = "../assets/images/disney-meetings/hero--large.jpg 540w"
const disneyMeetingsHeroMedium = "../assets/images/disney-meetings/hero--medium.jpg 470w"
const disneyMeetingsHeroSmall = "../assets/images/disney-meetings/hero--small.jpg 360w"
const disneyMeetingsHeroDefault = "../assets/images/disney-meetings/hero--default.jpg 320w"
function DisneyMeetings(props) {
  let alt = "Disney Meetings"
  const { width } = useViewport()
  const breakpoint = 400
  return (
    <div className="wrapper" id="DisneyMeetings">
      <div className="box-1">
        <div className="logo">
          <picture>
            <source sizes="540px" srcSet={disneyMeetingsLogoLarge} media="(min-width: 1024px)" />
            <source sizes="360px" srcSet={disneyMeetingsLogoSmall} media="(min-width: 800px)" />
            <img srcSet={disneyMeetingsLogoDefault} alt={alt} />
          </picture>
        </div>
        <div className="content">
          <h1>{alt}</h1>
          <h2 className="subtitle">
            <a href="https://www.disneymeetings.com" target="_blank">
              disneymeetings.com
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
            <DisneyMeetingsContent />
          </Modal>
        ) : (
          <DisneyMeetingsContent />
        )}
      </div>
      <DisneyNav />
    </div>
  )
}

export default DisneyMeetings
