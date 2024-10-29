document.addEventListener("DOMContentLoaded", () => {
    const themeToggle = document.getElementById("themeToggle");
    const body = document.body;
  
    // Check local storage for theme preference
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      body.classList.add(savedTheme);
      updateThemeIcon(savedTheme);
    }
  
    themeToggle.addEventListener("click", () => {
      body.classList.toggle("dark-mode");
      const currentTheme = body.classList.contains("dark-mode") ? "dark-mode" : "light-mode";
      localStorage.setItem("theme", currentTheme);
      updateThemeIcon(currentTheme);
    });
  
    function updateThemeIcon(theme) {
      const icon = themeToggle.querySelector("i");
      icon.className = theme === "dark-mode" ? "fas fa-sun" : "fas fa-moon";
    }
  });
  