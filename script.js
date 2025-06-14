const navbar = document.getElementById('main-nav');

function openSidebar() {
  navbar.classList.add('show');
}

function closeSidebar() {
  navbar.classList.remove('show');
}

function locoInitialize() {
  const scroll = new LocomotiveScroll({
    el: document.querySelector('body'),
    smooth: true
  });
}

locoInitialize();

const buttons = document.querySelectorAll(".modal-open-btn");
const divs = document.querySelectorAll(".project-info");

buttons.forEach((btn, index) => {
  const div = divs[index];

  div.style.display = "none"; // Ensure it's hidden by default

  btn.addEventListener("click", () => {
    if (!div.classList.contains("show")) {
      // Show div
      div.style.display = "block";
      requestAnimationFrame(() => {
        div.classList.add("show");
      });
      btn.textContent = "Close";
      btn.style.backgroundColor = "black";
       btn.style.color = "white";  // Change button text
    } else {
      // Hide div
      div.classList.remove("show");
      div.addEventListener("transitionend", function handler() {
        div.style.display = "none";
        div.removeEventListener("transitionend", handler);
      });
      btn.textContent = "Know More...";
      btn.style.backgroundColor = "White";
             btn.style.color = "black"; // Change button text
    }
  });
});

const tl = gsap.timeline();

gsap.registerPlugin(SplitText);

let split = SplitText.create(".text", "skill-text", {
  type: "lines, chars"
});

