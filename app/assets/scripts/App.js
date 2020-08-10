import "../styles/styles.css"
import "lazysizes"
import MobileMenu from "./modules/MobileMenu"
import RevealOnScroll from "./modules/RevealOnScroll"
import StickyHeader from "./modules/StickyHeader"

new StickyHeader()
new RevealOnScroll(document.querySelectorAll(".home"), 60)
new RevealOnScroll(document.querySelectorAll(".black-and-veatch"), 60)
new RevealOnScroll(document.querySelectorAll(".boston-market"), 60)
new RevealOnScroll(document.querySelectorAll(".diginext"), 60)
new RevealOnScroll(document.querySelectorAll(".disney"), 60)
new RevealOnScroll(document.querySelectorAll(".edc"), 60)
new RevealOnScroll(document.querySelectorAll(".episcopal-church"), 60)
new RevealOnScroll(document.querySelectorAll(".fastsigns"), 60)
new RevealOnScroll(document.querySelectorAll(".honeywell"), 60)
new RevealOnScroll(document.querySelectorAll(".imf"), 60)
new RevealOnScroll(document.querySelectorAll(".mastercard"), 60)
new RevealOnScroll(document.querySelectorAll(".molson-coors"), 60)
new RevealOnScroll(document.querySelectorAll(".newmont-mining"), 60)
new RevealOnScroll(document.querySelectorAll(".novartis"), 60)
new RevealOnScroll(document.querySelectorAll(".old-chicago"), 60)
new RevealOnScroll(document.querySelectorAll(".orlando-magic"), 60)
new RevealOnScroll(document.querySelectorAll(".red-robin"), 60)
new RevealOnScroll(document.querySelectorAll(".rock-bottom"), 60)
new RevealOnScroll(document.querySelectorAll(".severn-trent"), 60)
new RevealOnScroll(document.querySelectorAll(".templates"), 60)
new RevealOnScroll(document.querySelectorAll(".trip"), 60)
new RevealOnScroll(document.querySelectorAll(".visa"), 60)
new RevealOnScroll(document.querySelectorAll(".vpi-pet-insurance"), 60)
new RevealOnScroll(document.querySelectorAll(".wyoming-workforce-services"), 60)

new MobileMenu()
let modal

document.querySelectorAll(".open-modal").forEach(el => {
  el.addEventListener("click", e => {
    e.preventDefault()
    if (typeof modal == "undefined") {
      import(/* webpackChunkName: "modal" */ "./modules/Modal")
        .then(x => {
          modal = new x.default()
          setTimeout(() => modal.openTheModal(), 20)
        })
        .catch(() => console.log("There was a problem."))
    } else {
      modal.openTheModal()
    }
  })
})

if (module.hot) {
  module.hot.accept()
}
