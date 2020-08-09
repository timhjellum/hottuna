import React, { useEffect, useState } from "react"
import Modal from "./Modal"
import useViewport from "./useViewport"
import OldChicagoContent from "./OldChicagoContent"
const oldChicagoLogoLarge = "../assets/images/old-chicago/logo--large.png 250w"
const oldChicagoLogoSmall = "../assets/images/old-chicago/logo--small.png 200w"
const oldChicagoLogoDefault = "../assets/images/old-chicago/logo--default.png 150w"

function OldChicago(props) {
  let alt = "Old Chicago"
  const { width } = useViewport()
  const breakpoint = 400
  return (
    <div className="wrapper">
      <div className="box-1">
        <div className="logo">
          <picture>
            <source sizes="540px" srcSet={oldChicagoLogoLarge} media="(min-width: 1024px)" />
            <source sizes="360px" srcSet={oldChicagoLogoSmall} media="(min-width: 800px)" />
            <img srcSet={oldChicagoLogoDefault} alt={alt} />
          </picture>
        </div>
        <div className="text-content">
          <h1>{alt}</h1>
          <h2 className="subtitle">
            <a href="https://oldchicago.com" target="_blank">
              oldchicago.com
            </a>
          </h2>
          <h3 className="dates"></h3>
          <h2 className="my-title">Lead Information Architect (IA) & User Experience (UX) Designer</h2>
          <p className="description">I was tasked to produce highly usable usability and design documents for a new section of the Old Chicago Pizza & Tap Room website.</p>
          <div className="css_bar_graph">
            <ul className="x_axis">
              <li>Ideation</li>
              <li>Sitemaps</li>
              <li>Wireframes</li>
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
            <OldChicagoContent />
          </Modal>
        ) : (
          <OldChicagoContent />
        )}
      </div>
    </div>
  )
}

export default OldChicago
