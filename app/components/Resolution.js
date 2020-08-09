import React, { useEffect, useState } from "react"
import Modal from "./Modal"
import useViewport from "./useViewport"

function Resolution(props) {
  const { width } = useViewport()
  const breakpoint = 400

  return <div className="box-2">{width < breakpoint ? <Modal /> : props.children}</div>
}

export default Resolution
