document.documentElement.className = "lightMode";

const htmlDoc = document.documentElement;
const toggleBtn = document.getElementById("toggle-switch");
const toggleBall = document.getElementById("toggle-ball");
// CHECKS PREFERENCE
const useDark = window.matchMedia("(prefers-color-scheme: dark)");


toggleBtn.addEventListener("click", () => {
  let theme;
  toggleBall.classList.toggle("toggle-active");
  document.documentElement.classList.toggle("darkMode");
  document.documentElement.classList.toggle("lightMode");
  if (htmlDoc.classList.contains("lightMode")) console.log("light mode")
  if (htmlDoc.classList.contains("darkMode")) console.log("dark mode")
  // let theme = "lightTheme"
  // if (isDarkMode){
  //   theme = "darkTheme"
  // }
});



const handleThemeChange = (isDarkMode) => {
  if (isDarkMode) {
    document.documentElement.classList.add("darkMode")
    document.documentElement.classList.remove("lightMode");
    toggleBall.classList.add("toggle-active");
  }
  if (!isDarkMode) {
    document.documentElement.classList.add("lightMode");
    document.documentElement.classList.remove("darkMode")
    toggleBall.classList.remove("toggle-active");
  }
};

// HANLDE THE CHANGE BASED ON INITAL PREFERENCE
handleThemeChange(useDark.matches)

// LISTENS FOR CHANGES TO THE USERS PREFERENCE SETTINGS
useDark.addEventListener("change", (e) => handleThemeChange(e.matches))

