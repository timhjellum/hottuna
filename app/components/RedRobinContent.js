import React from "react"

function RedRobinContent(props) {
  const redRobinHeroLarge = "../assets/images/red-robin/hero--large.jpg 540w"
  const redRobinHeroMedium = "../assets/images/red-robin/hero--medium.jpg 470w"
  const redRobinHeroSmall = "../assets/images/red-robin/hero--small.jpg 360w"
  const redRobinHeroDefault = "../assets/images/red-robin/hero--default.jpg 320w"
  let alt = "Red Robin Website Redesign"
  return (
    <div className="wrapper">
      <div className="content">
        <picture>
          <source sizes="540px" srcSet={redRobinHeroLarge} media="(min-width: 1200px)" />
          <source sizes="470px" srcSet={redRobinHeroMedium} media="(min-width: 1024px)" />
          <source sizes="360px" srcSet={redRobinHeroSmall} media="(min-width: 800px)" />
          <img srcSet={redRobinHeroDefault} alt={alt} />
        </picture>
      </div>
    </div>
  )
}
export default RedRobinContent
