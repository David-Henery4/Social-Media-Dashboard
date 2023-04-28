// document.documentElement.className = "lightMode";
const htmlDoc = document.documentElement;
const toggleBtn = document.getElementById("toggle-switch");
const toggleBall = document.getElementById("toggle-ball");

// CHECKS PREFERENCE
const useDark = window.matchMedia("(prefers-color-scheme: dark)");

// HANDLES THEME CHANGE ON CLICK
toggleBtn.addEventListener("click", () => {
  let theme;
  toggleBall.classList.toggle("toggle-active");
  htmlDoc.classList.toggle("darkMode");
  htmlDoc.classList.toggle("lightMode");
  if (htmlDoc.classList.contains("lightMode")) {
    theme = "lightMode";
    localStorage.setItem("theme", theme);
  }
  if (htmlDoc.classList.contains("darkMode")) {
    theme = "darkMode";
    localStorage.setItem("theme", theme);
  }
});

// HANLDES THEME CHANGE BASED ON USERS OS PREFERENCE
const handleThemeChange = (isDarkMode) => {
  if (isDarkMode) {
    htmlDoc.classList.add("darkMode");
    htmlDoc.classList.remove("lightMode");
    toggleBall.classList.add("toggle-active");
  }
  if (!isDarkMode) {
    htmlDoc.classList.add("lightMode");
    htmlDoc.classList.remove("darkMode");
    toggleBall.classList.remove("toggle-active");
  }
};

// CHECK IF IN LOCAL STORAGE OR
// SET BY PREFERENCE ON INITAL LOAD
const checkIfThemeStored = () => {
  htmlDoc.className = "lightMode";
  if (localStorage.getItem("theme")) {
    const theme = localStorage.getItem("theme");
    htmlDoc.className = theme
  }
  if (!localStorage.getItem("theme")) {
    // HANLDE THE CHANGE BASED ON INITAL PREFERENCE
    handleThemeChange(useDark.matches);
  }
};

checkIfThemeStored()

// LISTENS FOR CHANGES TO THE USERS PREFERENCE SETTINGS
useDark.addEventListener("change", (e) => handleThemeChange(e.matches));
