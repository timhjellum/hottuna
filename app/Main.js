import React, { Component } from "react"
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
import SevernTrentServices from "./components/SevernTrentServices"
//import Templates from "./components/Templates"
import Trip from "./components/Trip"
import Visa from "./components/Visa"
import VeterinariansPetInsurance from "./components/VeterinariansPetInsurance"
import WyomingWorkforceServices from "./components/WyomingWorkforceServices"

import "./assets/styles/styles.css"

import Modal from "react-modal"

Modal.setAppElement("#app")

class Main extends Component {
  constructor(props) {
    super(props)
    this.scrollToTop = this.scrollToTop.bind(this)
    //this.state = {
    //  isDesktop: false //This is where I am having problems
    //}
    //this.updatePredicate = this.updatePredicate.bind(this)
  }
  componentDidMount() {
    //this.updatePredicate()
    //window.addEventListener("resize", this.updatePredicate)

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

  componentWillUnmount() {
    window.removeEventListener("resize", this.updatePredicate)
  }

  updatePredicate() {
    this.setState({ isDesktop: window.innerWidth > 1450 })
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
    //const isDesktop = this.state.isDesktop
    return (
      <div className="page-wrapper">
        {/*
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

        <div>{isDesktop ? <div>I show on 1451px or higher</div> : <div>I show on 1450px or lower</div>}</div>		*/}
        <div name="black-and-veatch" className="section black-and-veatch">
          <BlackAndVeatch />
        </div>
        <div name="boston-market" className="boston-market section">
          <BostonMarket />
        </div>
        <div name="diginext" className="section diginext">
          <Diginext />
        </div>
        <div name="disney-weddings" className="section disney-weddings">
          <DisneyWeddings />
        </div>
        <div name="disney-meetings" className="section disney-meetings">
          <DisneyMeetings />
        </div>
        <div name="disney-honeymoons" className="section disney-honeymoons">
          <DisneyHoneymoons />
        </div>
        <div name="disney-maps" className="section disney-maps">
          <DisneyMaps />
        </div>
        <div name="edc" className="section edc">
          <EducationDevelopmentCenter />
        </div>
        <div name="episcopal-church" className="section episcopal-church">
          <EpiscopalChurch />
        </div>
        <div name="fastsigns" className="section fastsigns">
          <Fastsigns />
        </div>
        <div name="honeywell" className="section honeywell">
          <Honeywell />
        </div>
        <div name="international-monetary-fund" className="section international-monetary-fund">
          <InternationalMonetoryFund />
        </div>
        <div name="mastercard" className="section mastercard">
          <Mastercard />
        </div>
        <div name="molsoncoors" className="section molsoncoors">
          <MolsonCoors />
        </div>
        <div name="newmont-mining" className="section newmont-mining">
          <NewmontMining />
        </div>
        <div name="novartis" className="section novartis">
          <Novartis />
        </div>
        <div name="old-chicago" className="section old-chicago">
          <OldChicago />
        </div>
        <div name="orlando-magic" className="section orlando-magic">
          <OrlandoMagic />
        </div>
        <div name="red-robin" className="section red-robin">
          <RedRobin />
        </div>
        <div name="rock-bottom" className="section rock-bottom">
          <RockBottom />
        </div>
        <div name="severn-trent-services" className="section">
          <SevernTrentServices />
        </div>
        <div name="trip" className="section trip">
          <Trip />
        </div>
        <div name="visa" className="visa section">
          <Visa />
        </div>
        <div name="veterinarians-pet-insurance" className="veterinarians-pet-insurance section">
          <VeterinariansPetInsurance />
        </div>
        <div name="wyoming-workforce-services" className="wyoming-workforce-services section">
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
