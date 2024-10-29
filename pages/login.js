// Define a simple user for demo purposes
const storedUser = {
    username: "user123",
    password: "password123"
  };
  
  // Function to log in
  document.getElementById("loginForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the form from submitting the traditional way
  
    const usernameInput = document.getElementById("username").value;
    const passwordInput = document.getElementById("password").value;
    const errorMessage = document.getElementById("errorMessage");
  
    // Validate credentials (in a real app, you'd verify against a database)
    if (usernameInput === storedUser.username && passwordInput === storedUser.password) {
      localStorage.setItem("loggedInUser", JSON.stringify(storedUser)); // Store user in local storage
      displayUserInfo();
    } else {
      errorMessage.textContent = "Invalid username or password.";
    }
  });
  
  // Function to display user information
  function displayUserInfo() {
    const userInfo = JSON.parse(localStorage.getItem("loggedInUser"));
    if (userInfo) {
      document.getElementById("loginContainer").style.display = "none"; // Hide login form
      document.getElementById("userInfo").style.display = "block"; // Show user info
      document.getElementById("displayUsername").textContent = userInfo.username; // Display username
    }
  }
  
  // Function to log out
  document.getElementById("logoutBtn").addEventListener("click", function () {
    localStorage.removeItem("loggedInUser"); // Remove user from local storage
    document.getElementById("loginContainer").style.display = "block"; // Show login form
    document.getElementById("userInfo").style.display = "none"; // Hide user info
  });
  
  // Check if user is already logged in on page load
  document.addEventListener("DOMContentLoaded", function () {
    displayUserInfo(); // Check local storage and display user info if logged in
  });
  