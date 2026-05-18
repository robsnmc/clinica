const toggle = document.getElementById("navToggle");
const links  = document.getElementById("navLinks");
if (toggle && links) {
  toggle.addEventListener("click", () => links.classList.toggle("open"));
}
document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => links && links.classList.remove("open"));
});
