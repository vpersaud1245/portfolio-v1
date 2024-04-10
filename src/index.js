import "./style.css";

/**
 * TODO
 * Make header slide up on scroll down and slide down on scroll up
 * Add sliding animation to experience section
 * Add links to socials and email
 * Add slide in underlines
 */

const header = document.querySelector(".header");

// Initial state
let scrollPos = 0;
// adding scroll event
window.addEventListener("scroll", () => {
  if (document.body.getBoundingClientRect().top > scrollPos) {
    // scrolling up
    header.style.transform = "translateY(0px)";
  } else {
    // scrolling down
    header.style.transform = "translateY(-200px)";
  }
  scrollPos = document.body.getBoundingClientRect().top;
});
