import React, { useEffect, useState } from "react"

function BostonMarket() {
  const bostonMarketLogoLarge = "../assets/images/boston-market/logo--large.png 250w"
  const bostonMarketLogoSmall = "../assets/images/boston-market/logo--small.png 200w"
  const bostonMarketLogoDefault = "../assets/images/boston-market/logo--default.png 150w"
  return (
    <div className="wrapper">
      <div className="box-1">
        <div className="logo">
          <picture>
            <source sizes="250px" srcSet={bostonMarketLogoLarge} media="(min-width: 1024px)" />
            <source sizes="200px" srcSet={bostonMarketLogoSmall} media="(min-width: 800px)" />
            <img srcSet={bostonMarketLogoDefault} alt="Black and Veatch" />
          </picture>
        </div>
        <div className="text-content">
          <h1 className="title">Boston Market Website Redesign</h1>
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
            {/*
			<div className="graph">
              <ul>
                <li className="bar nr_1 blue" style={{ height: "30px" }}>
                  <div className="top"></div>
                  <div className="bottom"></div>
                  <span>15%</span>
                </li>
                <li className="bar nr_2 green" style={{ height: "40px" }}>
                  <div className="top"></div>
                  <div className="bottom"></div>
                  <span>20%</span>
                </li>
                <li className="bar nr_3 orange" style={{ height: "70px" }}>
                  <div className="top"></div>
                  <div className="bottom"></div>
                  <span>35%</span>
                </li>
                <li className="bar nr_4 purple" style={{ height: "30px" }}>
                  <div className="top"></div>
                  <div className="bottom"></div>
                  <span>15%</span>
                </li>
                <li className="bar nr_5 red" style={{ height: "50px" }}>
                  <div className="top"></div>
                  <div className="bottom"></div>
                  <span>25%</span>
                </li>
              </ul>
			</div>
			*/}
            <div className="label">How I was utilized</div>
          </div>
          <p className="technologies"></p>
          <p className="tools"></p>
        </div>
      </div>
      <div className="box-2"></div>
    </div>
  )
}

export default BostonMarket
