const darkMode = () => {
  const darkModeToggle = document.getElementById("dark-mode-toggle");
  let isDarkMode = false;

  // Toggle dark mode
  darkModeToggle.addEventListener("click", () => {
    isDarkMode = !isDarkMode;

    setDarkMode(isDarkMode);

    localStorage.setItem("darkmode", isDarkMode);
  });

  // Set dark mode
  const setDarkMode = (isDarkMode) => {
    const bodyTag = document.body;
    const emojiPickerElement = document.getElementsByTagName("emoji-picker")[0];

    if (isDarkMode) {
      darkModeToggle.innerText = "🌞";
      bodyTag.setAttribute("data-theme", "dark");
      emojiPickerElement.setAttribute("class", "dark");
    } else {
      darkModeToggle.innerText = "🌛";
      bodyTag.removeAttribute("data-theme");
      emojiPickerElement.removeAttribute("class");
    }
  };

  // Check for dark mode on load
  const localStorageIsDarkMode = localStorage.getItem("darkmode");
  const prefersDarkMode =
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches;

  if (localStorageIsDarkMode === "true" || prefersDarkMode) {
    isDarkMode = true;
    setDarkMode(true);
  } else {
    isDarkMode = false;
    setDarkMode(false);
  }
};

export default darkMode;
