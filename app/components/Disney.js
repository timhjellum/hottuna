import React from "react"
import DisneyWeddings from "./DisneyWeddings"
import DisneyMeetings from "./DisneyMeetings"
import DisneyHoneymoons from "./DisneyHoneymoons"
import DisneyMaps from "./DisneyMaps"

function Disney(props) {
  return (
    <div className="disney-container">
     
        <DisneyWeddings />
      </div>

        <DisneyMeetings />
      </div>

        <DisneyHoneymoons />
      </div>

        <DisneyMaps />
      </div>
    </div>
  )
}

export default Disney
