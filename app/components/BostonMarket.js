import React, { useEffect, useState } from "react"
import Modal from "./Modal"
import useViewport from "./useViewport"
import BostonMarketContent from "./BostonMarketContent"

function BostonMarket(props) {
  const bostonMarketLogoLarge = "../assets/images/boston-market/logo--large.png 250w"
  const bostonMarketLogoSmall = "../assets/images/boston-market/logo--small.png 200w"
  const bostonMarketLogoDefault = "../assets/images/boston-market/logo--default.png 150w"
  let alt = "Boston Market Website Redesign"
  const { width } = useViewport()
  const breakpoint = 400
  return (
    <div className="wrapper">
      <div className="box-1">
        <div className="logo">
          <picture>
            <source sizes="250px" srcSet={bostonMarketLogoLarge} media="(min-width: 1024px)" />
            <source sizes="200px" srcSet={bostonMarketLogoSmall} media="(min-width: 800px)" />
            <img srcSet={bostonMarketLogoDefault} alt={alt} />
          </picture>
        </div>
        <div className="text-content">
          <h1>{alt}</h1>
          <h2 className="my-title">Lead Information Architect (IA) and User Experience (UX) Designer</h2>
          <p className="dates">March 2009 - November 2009</p>
          <p className="description">My responsibility on this project was to deliver wireframes, sitemaps, facilitate persona workshops, menu taxonomy, and assist with design mockups for the Boston Market website redesign.</p>
          {/*
		  <ul className="highlights">
            <li>Lead requirement and Ideation, along with an extensive persona workshop, which produced highly detailed design artifacts.</li>
            <li>Was able to capture the Disney Experience, a high level dream and explore, and detailed plan and initiate user paths.</li>
            <li>Clients were extremely happy with the overall process and results.</li>
          </ul>
		  <p className="technologies"></p>
		  <p className="tools"></p>
		  */}
          <h2 className="subtitle">
            <a href="https://www.bostonmarket.com" target="_blank">
              bostonmarket.com
            </a>
          </h2>
        </div>
      </div>
      <div className="box-2">
        {width < breakpoint ? (
          <Modal>
            <BostonMarketContent />
          </Modal>
        ) : (
          <BostonMarketContent />
        )}
      </div>
    </div>
  )
}

export default BostonMarket
