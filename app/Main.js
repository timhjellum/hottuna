import React, { Component } from "react"
import ReactDOM from "react-dom"
import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from "react-scroll"
// https://www.npmjs.com/package/react-scroll

// My Components
import BlackAndVeatch from "./components/BlackAndVeatch"
import BostonMarket from "./components/BostonMarket"
import Diginext from "./components/Diginext"
import Disney from "./components/Disney"
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
import SevernTrentServices from "./components/SevernTrentServices"
//import Templates from "./components/Templates"
import Trip from "./components/Trip"
import Visa from "./components/Visa"
import VeterinariansPetInsurance from "./components/VeterinariansPetInsurance"
import WyomingWorkforceServices from "./components/WyomingWorkforceServices"

import "./assets/styles/styles.css"

class Main extends Component {
  constructor(props) {
    super(props)
    this.scrollToTop = this.scrollToTop.bind(this)
  }

  componentDidMount() {
    Events.scrollEvent.register("begin", function () {
      console.log("begin", arguments)
    })

    Events.scrollEvent.register("end", function () {
      console.log("end", arguments)
    })

    // Setup isScrolling variable

    // element should be replaced with the actual target element on which you have applied scroll, use window in case of no target element.

    var isScrolling
    var lastScrollTop = window.pageYOffset
    // Listen for scroll events
    window.addEventListener(
      "scroll",
      function () {
        // Clear our timeout throughout the scroll
        window.clearTimeout(isScrolling)

        // Set a timeout to run after scrolling ends
        isScrolling = setTimeout(function () {
          // Run the callback
          console.log("Scrolling has stopped.")

          //console.log(lastScrollTop)

          var scrollTop = window.pageYOffset || document.documentElement.scrollTop
          // || document.documentElement.scrollTop // Credits: "https://github.com/qeremy/so/blob/master/so.dom.js#L426"
          //console.log("Scroll Y: " + lastScrollTop + ", vs Last scroll Y: " + scrollTop)

          var halfWindowInnerHeight = window.innerHeight / 2
          const allSections = document.querySelectorAll(".section")
          var i
          if (scrollTop > lastScrollTop) {
            for (let i = 0; i < allSections.length; i++) {
              if (allSections[i].offsetTop - scrollTop < 0 && allSections[i].offsetTop - scrollTop < halfWindowInnerHeight) {
                var nextSection = allSections[i + 1]
                nextSection.scrollIntoView({
                  behavior: "smooth"
                })
                //console.log(nextSection)
              }
            }
          } else if (scrollTop < lastScrollTop) {
            //console.log(scrollTop - window.innerHeight + " > " + lastScrollTop + " = up")
            for (let i = 0; i < allSections.length; i++) {
              if (allSections[i].offsetTop - scrollTop > 0 && allSections[i].offsetTop - scrollTop < halfWindowInnerHeight) {
                var thisSection = allSections[i - 1]
                thisSection.scrollIntoView({
                  behavior: "smooth"
                })
                //console.log(thisSection)
              }
            }
          }
          lastScrollTop = scrollTop <= 0 ? 0 : scrollTop // For Mobile or negative scrolling
        }, 500)
      },
      false
    )
  }
  scrollToTop() {
    scroll.scrollToTop()
  }

  /*
  scrollTo() {
    scroller.scrollTo("scroll-to-element", {
      duration: 800,
      delay: 0,
      smooth: "easeInOutQuart"
    })
  }
  scrollToWithContainer() {
    let goToContainer = new Promise((resolve, reject) => {
      Events.scrollEvent.register("end", () => {
        resolve()
        Events.scrollEvent.remove("end")
      })

      scroller.scrollTo("scroll-container", {
        duration: 800,
        delay: 0,
        smooth: "easeInOutQuart"
      })
    })

    goToContainer.then(() =>
      scroller.scrollTo("scroll-container-second-element", {
        duration: 800,
        delay: 0,
        smooth: "easeInOutQuart",
        containerId: "scroll-container"
      })
    )
  }
  */
  componentWillUnmount() {
    Events.scrollEvent.remove("begin")
    Events.scrollEvent.remove("end")
  }
  render() {
    return (
      <div className="page-wrapper">
        <nav>
          <ul>
            <li>
              <Link activeClass="active" className="episcopal-church" to="episcopal-church" spy={true} smooth={true} duration={500}>
                Test 1
              </Link>
            </li>
            <li>
              <Link activeClass="active" className="honeywell" to="honeywell" spy={true} smooth={true} duration={500}>
                Test 2
              </Link>
            </li>
            <li>
              <Link activeClass="active" className="mastercard" to="mastercard" spy={true} smooth={true} duration={500}>
                Test 3
              </Link>
            </li>
          </ul>
        </nav>

        <div name="black-and-veatch" className="section">
          <BlackAndVeatch />
        </div>
        <div name="boston-market section" className="section">
          <BostonMarket />
        </div>
        <div name="diginext" className="section">
          <Diginext />
        </div>
        <div name="disney" className="section">
          <Disney />
        </div>
        <div name="edc" className="section">
          <EducationDevelopmentCenter />
        </div>
        <div name="episcopal-church" className="section">
          <EpiscopalChurch />
        </div>
        <div name="fastsigns" className="section">
          <Fastsigns />
        </div>
        <div name="honeywell" className="section">
          <Honeywell />
        </div>
        <div name="international-monetary-fund" className="section">
          <InternationalMonetoryFund />
        </div>
        <div name="mastercard" className="section">
          <Mastercard />
        </div>
        <div name="molson-coors" className="section">
          <MolsonCoors />
        </div>
        <div name="newmont-mining" className="section">
          <NewmontMining />
        </div>
        <div name="novartis" className="section">
          <Novartis />
        </div>
        <div name="old-chicago" className="section">
          <OldChicago />
        </div>
        <div name="orlando-magic" className="section">
          <OrlandoMagic />
        </div>
        <div name="red-robin" className="section">
          <RedRobin />
        </div>
        <div name="rock-bottom" className="section">
          <RockBottom />
        </div>
        <div name="severn-trent-services" className="section">
          <SevernTrentServices />
        </div>
        <div name="trip" className="section">
          <Trip />
        </div>
        <div name="visa" className="visa section">
          <Visa />
        </div>
        <div name="veterinarians-pet-insurance" className="section">
          <VeterinariansPetInsurance />
        </div>
        <div name="wyoming-workforce-services" className="section">
          <WyomingWorkforceServices />
        </div>
        <a onClick={this.scrollToTop}>To the top!</a>
      </div>
    )
  }
}
export default Main

const rootElement = document.getElementById("app")
ReactDOM.render(<Main />, rootElement)

if (module.hot) {
  module.hot.accept()
}
