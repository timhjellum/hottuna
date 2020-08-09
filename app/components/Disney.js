import React from "react"
import DisneyWeddings from "./DisneyWeddings"
import DisneyMeetings from "./DisneyMeetings"
import DisneyHoneymoons from "./DisneyHoneymoons"
import DisneyMaps from "./DisneyMaps"

function Disney(props) {
  return (
    <div className="disney-container">
      <div className="item disney-weddings">
        <DisneyWeddings />
      </div>
      <div className="item disney-meetings">
        <DisneyMeetings />
      </div>
      <div className="item disney-honeymoons">
        <DisneyHoneymoons />
      </div>
      <div className="item disney-maps">
        <DisneyMaps />
      </div>
    </div>
  )
}

export default Disney
