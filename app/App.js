import React, { Component, useState } from "react"
import ReactDOM from "react-dom"
import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from "react-scroll"
// https://www.npmjs.com/package/react-scroll

// My Components
import BlackAndVeatch from "./components/BlackAndVeatch"
import BostonMarket from "./components/BostonMarket"
import Diginext from "./components/Diginext"
import DisneyWeddings from "./components/DisneyWeddings"
import DisneyMeetings from "./components/DisneyMeetings"
import DisneyHoneymoons from "./components/DisneyHoneymoons"
import DisneyMaps from "./components/DisneyMaps"
import EducationDevelopmentCenter from "./components/EducationDevelopmentCenter"
import EpiscopalChurch from "./components/EpiscopalChurch"
import Fastsigns from "./components/Fastsigns"
import Honeywell from "./components/Honeywell"
import InternationalMonetoryFund from "./components/InternationalMonetoryFund"
import Mastercard from "./components/Mastercard"
import MolsonCoors from "./components/MolsonCoors"
import NewmontMining from "./components/NewmontMining"
import Novartis from "./components/Novartis"
import OldChicago from "./components/OldChicago"
import OrlandoMagic from "./components/OrlandoMagic"
import RedRobin from "./components/RedRobin"
import RockBottom from "./components/RockBottom"
import SevernTrent from "./components/SevernTrent"
import SharePoint from "./components/SharePoint"
import Trip from "./components/Trip"
import Visa from "./components/Visa"
import VeterinariansPetInsurance from "./components/VeterinariansPetInsurance"
import WyomingWorkforceServices from "./components/WyomingWorkforceServices"

import { PageSlider } from "page-slider-react"
import ReactPageScroller from "react-page-scroller"
import { Pager } from "react-bootstrap"
import Modal from "react-modal"

Modal.setAppElement("#app")
import "./assets/styles/styles.css"

class App extends Component {
  constructor(props) {
    super(props)
    this.state = { currentPage: null }
  }
  componentDidMount() {
    //var clientHeight = document.body.clientHeight
    //var totalHeight = clientHeight * 9 // number of sections
    //console.log(clientHeight + " x 9 = " + totalHeight)
    //document.getElementById("app").style.height = totalHeight + "px"
  }
  handlePageChange = number => {
    this.setState({ currentPage: number }) // set currentPage number, to reset it from the previous selected.
  }

  getPagesNumbers = () => {
    const pageNumbers = []

    for (let i = 1; i <= 5; i++) {
      pageNumbers.push(
        <Pager.Item key={i} eventKey={i - 1} onSelect={this.handlePageChange}>
          {i}
        </Pager.Item>
      )
    }

    return [...pageNumbers]
  }
  render() {
    const sharePoint = [<SharePoint />, <BlackAndVeatch />, <EducationDevelopmentCenter />, <Honeywell />, <InternationalMonetoryFund />, <Mastercard />, <MolsonCoors />, <NewmontMining />, <Novartis />, <Visa />, <VeterinariansPetInsurance />, <WyomingWorkforceServices />, <OrlandoMagic />, <SevernTrent />]
    const disney = [<DisneyWeddings />, <DisneyHoneymoons />, <DisneyMeetings />, <DisneyMaps />]
    const pagesNumbers = this.getPagesNumbers()
    return (
      <React.Fragment>
        <ReactPageScroller pageOnChange={this.handlePageChange} customPageNumber={this.state.currentPage}>
          <BostonMarket className="boston-market section" />
          <Diginext className="diginext section" />
          <PageSlider
            compList={disney}
            horizontal={true}
            actionFlagTime={500}
            sensitivity={100}
            navigation={{
              type: "bottom", //  type: Specify locate of navigation bar. Enter either top, right, bottom, left, or none. If you type none, the navigation bar is not visible. Default value is none.
              hide: false, // hide: Make the navigation bar invisible when not in use. Default value is false.
              timer: 2000, // timer: Set the time navigation bar is displayed when the hide is true. The unit is milliseconds. Default value is 2000.
              size: 16, // size: Specify the size of navigation bar. Style unit is internally used em, navigation bar is resized to match the changes of this value. Default value is 16.
              unit: "px" // unit: It is a unit of size. Enter either px, em, rem, vh, vw or '%'. Default value is px.
            }}
            className={disney}
          />
          <EpiscopalChurch className="episcopal-church section" />
          <Fastsigns className="fastsigns section" />
          <OldChicago className="old-chicago section" />
          <RedRobin className="red-robin section" />
          <RockBottom className="rock-bottom section" />
          <Trip className="trip section" />
          <PageSlider
            compList={sharePoint}
            horizontal={true}
            actionFlagTime={500}
            sensitivity={100}
            navigation={{
              type: "bottom", //  type: Specify locate of navigation bar. Enter either top, right, bottom, left, or none. If you type none, the navigation bar is not visible. Default value is none.
              hide: false, // hide: Make the navigation bar invisible when not in use. Default value is false.
              timer: 2000, // timer: Set the time navigation bar is displayed when the hide is true. The unit is milliseconds. Default value is 2000.
              size: 16, // size: Specify the size of navigation bar. Style unit is internally used em, navigation bar is resized to match the changes of this value. Default value is 16.
              unit: "px" // unit: It is a unit of size. Enter either px, em, rem, vh, vw or '%'. Default value is px.
            }}
            className="sharepoint section"
          />
        </ReactPageScroller>
        <Pager className="pagination-additional-class" bsSize="large">
          {pagesNumbers}
        </Pager>
      </React.Fragment>
    )
  }
}
export default App

const rootElement = document.getElementById("app")
ReactDOM.render(<App />, rootElement)

if (module.hot) {
  module.hot.accept()
}
