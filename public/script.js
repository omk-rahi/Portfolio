const navToggle = document.getElementById("nav-toggle");
const nav = document.getElementById("nav");

navToggle.addEventListener("click", () => {
  nav.classList.toggle("hidden");
});

nav.addEventListener("click", () => {
  nav.classList.add("hidden");
});
