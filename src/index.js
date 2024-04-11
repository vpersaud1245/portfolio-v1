import "./style.css";

/**
 * TODO
 * Make header slide up on scroll down and slide down on scroll up
 * Add sliding animation to experience section
 * Add links to socials and email
 * Add slide in underlines
 */

// HEADER SCROLL EFFECT
const header = document.querySelector(".header");

let scrollPos = 0;

function moveHeader() {
  // If at page top dont make header slide up immedietly
  if (window.scrollY > 80) {
    header.classList.remove("top");
    if (document.body.getBoundingClientRect().top > scrollPos) {
      // scrolling up
      header.style.transform = "translateY(0px)";
      header.style.transition = "transform 300ms ease-out";
    } else {
      // scrolling down
      header.style.transform = "translateY(-200px)";
      header.style.transition = "transform 500ms ease-in";
    }
  }
  scrollPos = document.body.getBoundingClientRect().top;
  if (window.scrollY < 50) {
    header.classList.add("top");
  }
}

window.addEventListener("scroll", moveHeader);

const firstItemSummary = `<h3 class="experience-summary--title">
Student Web Developer
<span class="title--company-name">@ The Odin Project</span>
</h3>
<p class="experience-summary--dates">December 2023 - Present</p>
<ul class="experience-summary--job-duties">
<li class="job-duties--item">
  Mastering HTML5, CSS3, and JavaScript through The Odin Project curriculum.
</li>
<li class="job-duties--item">
  Building responsive web pages with Bootstrap for enhanced user experience.
</li>
<li class="job-duties--item">
  Exploring back-end development with Node.js and MongoDB.
</li>
<li class="job-duties--item">
  Actively engaging in online communities to stay updated on web development trends and best practices.
</li>
</ul>`;
const secondItemSummary = `<h3 class="experience-summary--title">
Computer Science Graduate
<span class="title--company-name">@ WGU</span>
</h3>
<p class="experience-summary--dates">December 2023</p>
<ul class="experience-summary--job-duties">
<li class="job-duties--item">
  Completed rigorous coursework in computer science, including algorithms, data structures, and software engineering principles.
</li>
<li class="job-duties--item">
  Developed proficiency in programming languages such as Java, Python, and C++.
</li>
<li class="job-duties--item">
  Applied theoretical knowledge to practical projects, including software development and system analysis.
</li>
<li class="job-duties--item">
  Demonstrated strong problem-solving skills and attention to detail in complex coding tasks.
</li>
</ul>`;
const thirdItemSummary = `<h3 class="experience-summary--title">
Aircraft Maintenance Technician
<span class="title--company-name">@ Breeze Airways</span>
</h3>
<p class="experience-summary--dates">August 2021 - Present</p>
<ul class="experience-summary--job-duties">
<li class="job-duties--item">
  Conducted routine inspections and maintenance on aircraft systems and components according to FAA regulations.
</li>
<li class="job-duties--item">
  Troubleshooted and repaired mechanical, electrical, and hydraulic systems to ensure safe and efficient operation of aircraft.
</li>
<li class="job-duties--item">
  Documented maintenance activities and performed required record-keeping tasks to maintain compliance with regulatory standards.
</li>
<li class="job-duties--item">
  Collaborated with cross-functional teams to coordinate maintenance schedules and minimize aircraft downtime.
</li>
</ul>`;

// EXPERIENCE BAR MOVING EFFECT
const experienceListItems = document.querySelectorAll(".experience-list__item");
let currentFocusedItem = document.querySelector(".experience-list__item.focus");
const focusBar = document.querySelector(".content__experience-list--focus-bar");
const experienceSummary = document.querySelector(
  ".content__experience-summary",
);

experienceListItems.forEach((item) => {
  item.addEventListener("click", () => {
    if (item === currentFocusedItem) return;
    window.removeEventListener("scroll", moveHeader);
    focusBar.classList.remove(focusBar.classList[1]);
    currentFocusedItem.classList.remove("focus");
    item.classList.add("focus");
    currentFocusedItem = item;
    experienceSummary.style.opacity = "0";
    experienceSummary.innerHTML = "";

    if (item.id === "first_item") {
      focusBar.classList.add("first-item");
      setTimeout(() => {
        experienceSummary.style.opacity = "100%";
        experienceSummary.innerHTML = firstItemSummary;
        window.addEventListener("scroll", moveHeader);
      }, 200);
    } else if (item.id === "second_item") {
      focusBar.classList.add("second-item");
      setTimeout(() => {
        experienceSummary.style.opacity = "100%";
        experienceSummary.innerHTML = secondItemSummary;
        window.addEventListener("scroll", moveHeader);
      }, 200);
    } else if (item.id === "third_item") {
      focusBar.classList.add("third-item");
      setTimeout(() => {
        experienceSummary.style.opacity = "100%";
        experienceSummary.innerHTML = thirdItemSummary;
        window.addEventListener("scroll", moveHeader);
      }, 200);
    }
  });
});
