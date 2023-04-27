document.documentElement.className = "lightMode";

const toggleBtn = document.getElementById("toggle-switch");
const toggleBall = document.getElementById("toggle-ball");

toggleBtn.addEventListener("click", () => {
  toggleBall.classList.toggle("toggle-active");
});
