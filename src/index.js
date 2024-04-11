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
    header.style.transition = "transform 300ms ease-out";
  } else {
    // scrolling down
    header.style.transform = "translateY(-200px)";
    header.style.transition = "transform 500ms ease-in";
  }
  scrollPos = document.body.getBoundingClientRect().top;
});

const experienceListItems = document.querySelectorAll(".experience-list__item");
let currentFocusedItem = document.querySelector(".experience-list__item.focus");
const focusBar = document.querySelector(".content__experience-list--focus-bar");

experienceListItems.forEach((item) => {
  item.addEventListener("click", (e) => {
    if (item === currentFocusedItem) return;
    focusBar.classList.remove(focusBar.classList[1]);
    currentFocusedItem.classList.remove("focus");
    item.classList.add("focus");
    currentFocusedItem = item;
    if (item.id === "first_item") {
      focusBar.classList.add("first-item");
    } else if (item.id === "second_item") {
      focusBar.classList.add("second-item");
    } else if (item.id === "third_item") {
      focusBar.classList.add("third-item");
    }
  });
});
