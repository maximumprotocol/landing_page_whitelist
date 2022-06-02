const defaultImage = "svg/Illustration-2.svg";

let illustration = document.getElementById(
  "second-container-hover-illustration"
);
let cards = document.querySelectorAll(".services_list li");

// document.addEventListener("mouse");

cards.forEach((card) => {
  card.addEventListener("mouseenter", (e) => {
    illustration.setAttribute("src", e.target.dataset.hoverimage);
  });

  card.addEventListener("mouseleave", (e) => {
    illustration.setAttribute("src", defaultImage);
  });
});
