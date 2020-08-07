import React, { useEffect, useState } from "react"
const tripLogoLarge = "../assets/images/trip/logo--large.png 250w"
const tripLogoSmall = "../assets/images/trip/logo--small.png 200w"
const tripLogoDefault = "../assets/images/trip/logo--default.png 150w"
const tripHeroLarge = "../assets/images/trip/hero--large.jpg 540w"
const tripHeroMedium = "../assets/images/trip/hero--medium.jpg 470w"
const tripHeroSmall = "../assets/images/trip/hero--small.jpg 360w"
const tripHeroDefault = "../assets/images/trip/hero--default.jpg 320w"
function Trip() {
  let alt = "Trip.com / CheapTickets.com / all Cendent Cobrands"
  return (
    <div className="wrapper">
      <div className="box-1">
        <div className="logo">
          {" "}
          <picture>
            <source sizes="540px" srcSet={tripLogoLarge} media="(min-width: 1024px)" />
            <source sizes="360px" srcSet={tripLogoSmall} media="(min-width: 800px)" />
            <img srcSet={tripLogoDefault} alt={alt} />
          </picture>
        </div>
        <div className="text-content">
          <h1>{alt}</h1>
          <h2 className="subtitle">
            <a href="http://www.avis.com">Avis</a>, <a href="http://www.budget.com">Budget Rent A Car</a>, AmeriHost Inn, <a href="http://www.baymontinns.com">Baymont Inn &amp; Suites</a>, <a href="http://www.daysinn.com">Days Inn</a>, <a href="http://www.hojo.com">Howard Johnson</a>, <a href="http://www.knightsinn.com">Knights Inn</a>, <a href="http://www.ramada.com">Ramada</a>, <a href="http://www.super8.com/&am">Super 8 Worldwide</a>, <a href="http://www.travelodge.com">Travelodge</a>, <a href="http://www.wingatehotels.com">Wingate Inns</a>, <a href="http://www.wyndham.com">Wyndham Hotels &amp; Resorts</a>, <a href="http://www.trip.com">Trip.com</a>, <a href="http://www.cheaptickets.com">CheapTickets.com</a> (then Orbits and now Travelocity) and <a href="http://www.lodging.com">Lodging.com</a>
          </h2>
          <h3 className="dates">xxx 2015 â€“ xxx 2016</h3>
          <h2 className="my-title">Lead Information Architect (IA) and User Experience (UX) Designer</h2>
          <p className="description">Responsible for the overall branding and user-interface implementation of: Avis, Budget Rent A Car, AmeriHost Inn, Baymont Inn &#38; Suites, Days Inn, Howard Johnson, Knights Inn, Ramada, Super 8 Worldwide, Travelodge, Wingate Inns, Wyndham Hotels &#38; Resorts, Trip.com, CheapTickets.com and Lodging.com.</p>
        </div>
      </div>
      <div className="box-2">
        {" "}
        <div className="wrapper">
          <div className="content">
            <picture>
              <source sizes="540px" srcSet={tripHeroLarge} media="(min-width: 1200px)" />
              <source sizes="470px" srcSet={tripHeroMedium} media="(min-width: 1024px)" />
              <source sizes="360px" srcSet={tripHeroSmall} media="(min-width: 800px)" />
              <img srcSet={tripHeroDefault} alt={alt} />
            </picture>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Trip
