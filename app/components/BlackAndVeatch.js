import React, { useEffect, useState } from "react"
//import { render } from "react-dom"
import Modal from "react-modal"

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)"
  }
}

var subtitle

function BlackAndVeatch(props) {
  let alt = "Black and Veatch"
  const blackAndVeatchHeroLarge = "../assets/images/black-and-veatch/hero--large.jpg 540w"
  const blackAndVeatchHeroMedium = "../assets/images/black-and-veatch/hero--medium.jpg 470w"
  const blackAndVeatchHeroSmall = "../assets/images/black-and-veatch/hero--small.jpg 360w"
  const blackAndVeatchHeroDefault = "../assets/images/black-and-veatch/hero--default.jpg 320w"
  require("svg-url-loader!../assets/images/black-and-veatch/logo--default.svg")

  const [modalIsOpen, setIsOpen] = React.useState(true)
  function openModal() {
    setIsOpen(true)
  }
  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = "#f00"
  }
  function closeModal() {
    setIsOpen(false)
  }

  //const isDesktop = this.state.isDesktop

  return (
    <div className="wrapper">
      <div className="box-1">
        <div className="logo"></div>
        <div className="text-content">
          <h1>{alt}</h1>
          <h3 className="dates"></h3>
          <h2 className="my-title">Lead SharePoint User Interface Developer</h2>
          <p className="description">Engaged mid-project to remedy and implement the branding and design of a SharePoint implementation.</p>
          <ul className="highlights">
            <li>Provided best practices for SharePoint file and folder structure to allow for a scalable solution for content editing</li>
            <li>Rectified and implemented a pixel perfect design including masterpages, page layouts, web-parts, themes and templates</li>
            <li>Managed an off-shore development team tasked to migrate all content and duplicate existing functionality into a .NET environment</li>
          </ul>
          <p className="technologies"></p>
          <p className="tools"></p>
        </div>
      </div>
      {/* <div>{isDesktop ? <div>I show on 1451px or higher</div> : <div>I show on 1450px or lower</div>}</div> */}
      <div className="box-2">
        <div>
          <button onClick={openModal} className="modal-button">
            Open Modal
          </button>
          <Modal isOpen={modalIsOpen} onAfterOpen={afterOpenModal} onRequestClose={closeModal} style={customStyles} contentLabel="Example Modal">
            <h2 ref={_subtitle => (subtitle = _subtitle)}>Hello</h2>
            <button onClick={closeModal}>close</button>
            <div className="wrapper">
              <div className="content">
                <picture>
                  <source sizes="540px" srcSet={blackAndVeatchHeroLarge} media="(min-width: 1200px)" />
                  <source sizes="470px" srcSet={blackAndVeatchHeroMedium} media="(min-width: 1024px)" />
                  <source sizes="360px" srcSet={blackAndVeatchHeroSmall} media="(min-width: 800px)" />
                  <img srcSet={blackAndVeatchHeroDefault} alt={alt} />
                </picture>
              </div>
            </div>
          </Modal>
        </div>
      </div>
    </div>
  )
}

export default BlackAndVeatch
