import React, { useEffect, useState } from "react"
import Modal from "./Modal"
import useViewport from "./useViewport"
import BostonMarketContent from "./BostonMarketContent"

function BostonMarket(props) {
  const bostonMarketLogoLarge = "../assets/images/boston-market/logo--large.png 250w"
  const bostonMarketLogoSmall = "../assets/images/boston-market/logo--small.png 200w"
  const bostonMarketLogoDefault = "../assets/images/boston-market/logo--default.png 150w"
  const bostonMarketHeroLarge = "../assets/images/boston-market/hero--large.jpg 540w"
  const bostonMarketHeroMedium = "../assets/images/boston-market/hero--medium.jpg 470w"
  const bostonMarketHeroSmall = "../assets/images/boston-market/hero--small.jpg 360w"
  const bostonMarketHeroDefault = "../assets/images/boston-market/hero--default.jpg 320w"
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
          <h2 className="subtitle">
            <a href="https://www.bostonmarket.com" target="_blank">
              bostonmarket.com
            </a>
          </h2>
          <h3 className="dates">March 2009 - November 2009</h3>
          <h2 className="my-title">Lead Information Architect (IA) and User Experience (UX) Designer</h2>
          <p className="description"></p>
          <div className="css_bar_graph">
            <ul className="x_axis">
              <li>Requirements</li>
              <li>Sitemaps</li>
              <li>Wireframes</li>
              <li>Personas</li>
              <li>Taxonomy</li>
            </ul>
            <div className="label">How I was utilized</div>
          </div>
          <p className="technologies"></p>
          <p className="tools"></p>
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
