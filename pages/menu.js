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
    const currentTheme = body.classList.contains("dark-mode")
      ? "dark-mode"
      : "light-mode";
    localStorage.setItem("theme", currentTheme);
    updateThemeIcon(currentTheme);
  });

  function updateThemeIcon(theme) {
    const icon = themeToggle.querySelector("i");
    icon.className = theme === "dark-mode" ? "fas fa-sun" : "fas fa-moon";
  }
});



document.addEventListener("DOMContentLoaded", () => {
    const filter = document.getElementById("menuFilter");
    const menuItems = document.querySelectorAll(".menu-container .row");
  
    // Retrieve saved filter selection from local storage
    const savedCategory = localStorage.getItem("selectedCategory") || "all";
    filter.value = savedCategory;
  
    // Function to apply the filter
    function applyFilter(selectedCategory) {
      menuItems.forEach(item => {
        const itemCategory = item.getAttribute("data-category");
        if (selectedCategory === "all" || itemCategory === selectedCategory) {
          item.style.display = "flex";
        } else {
          item.style.display = "none";
        }
      });
    }
  
    // Apply saved filter on page load
    applyFilter(savedCategory);
  
    // Event listener for filter change
    filter.addEventListener("change", () => {
      const selectedCategory = filter.value;
      applyFilter(selectedCategory);
      localStorage.setItem("selectedCategory", selectedCategory); // Save selection to local storage
    });
  });
  
  