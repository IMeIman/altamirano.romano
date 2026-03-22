const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("active");
  if (navLinks.classList.contains("active")) {
    menuBtn.innerHTML = "x";
    menuBtn.setAttribute("aria-expandede", "true");
  } else {
    menuBtn.innerHTML = "☰";
    menuBtn.setAttribute("aria-expanded", "false");
  }
});
