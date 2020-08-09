import React from "react"

function DisneyMeetingsContent(props) {
  const disneyMeetingsHeroLarge = "../assets/images/disney-meetings/hero--large.jpg 540w"
  const disneyMeetingsHeroMedium = "../assets/images/disney-meetings/hero--medium.jpg 470w"
  const disneyMeetingsHeroSmall = "../assets/images/disney-meetings/hero--small.jpg 360w"
  const disneyMeetingsHeroDefault = "../assets/images/disney-meetings/hero--default.jpg 320w"
  let alt = "Boston Market Website Redesign"
  return (
    <div className="wrapper">
      <div className="content">
        <picture>
          <source sizes="540px" srcSet={disneyMeetingsHeroLarge} media="(min-width: 1200px)" />
          <source sizes="470px" srcSet={disneyMeetingsHeroMedium} media="(min-width: 1024px)" />
          <source sizes="360px" srcSet={disneyMeetingsHeroSmall} media="(min-width: 800px)" />
          <img srcSet={disneyMeetingsHeroDefault} alt={alt} />
        </picture>
      </div>
    </div>
  )
}
export default DisneyMeetingsContent
