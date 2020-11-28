const doc = document;
const menuOpen = doc.querySelector(".menu");
const menuClose = doc.querySelector(".close");
const overlay = doc.querySelector(".overlay");
const closeoverlay = doc.querySelector(".applications")

menuOpen.addEventListener("click", () => {
  overlay.classList.add("overlay--active");
});

menuClose.addEventListener("click", () => {
  overlay.classList.remove("overlay--active");
});

closeoverlay.addEventListener("click", () => {
  overlay.classList.remove("overlay--active");
});
