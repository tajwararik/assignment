// Audio object for the online sound effect
const clickSound = new Audio('../audio/click.mp3'); 

clickSound.addEventListener('canplay', () => {
  clickSound.play();
});

document.querySelectorAll(".btn-warning").forEach((button) => {
  button.addEventListener("click", function () {
    // Play the sound when it is ready
    clickSound.addEventListener('canplay', () => {
      clickSound.currentTime = 0; // Reset sound to the start
      clickSound.play(); // Play the sound effect
    }, { once: true }); // The listener is removed after it plays once

    this.classList.add("clicked"); // Add a class for the animation

    // Remove the class after the animation duration to reset
    setTimeout(() => {
      this.classList.remove("clicked");
    }, 300); // Match this duration with your CSS transition duration
  });
});

// FAQ
document.addEventListener("DOMContentLoaded", function () {
  const faqQuestions = document.querySelectorAll(".faq-question");

  faqQuestions.forEach((question) => {
    question.addEventListener("click", function () {
      const answer = this.nextElementSibling; // The answer is the next sibling <p>
      if (answer.style.display === "none" || answer.style.display === "") {
        answer.style.display = "block"; // Show the answer
      } else {
        answer.style.display = "none"; // Hide the answer
      }
    });
  });
});

// Rating stars
const stars = document.querySelectorAll("#starRating .fa-star");
const ratingInput = document.getElementById("rating");

stars.forEach((star) => {
  star.addEventListener("click", function () {
    const ratingValue = this.getAttribute("data-value");
    ratingInput.value = ratingValue; // Set the hidden input value

    // Reset all stars
    stars.forEach((s) => s.classList.remove("selected"));

    // Highlight selected stars
    for (let i = 0; i < ratingValue; i++) {
      stars[i].classList.add("selected");
    }
  });
});

// Asynchronous function to handle form submission
document.getElementById("contactForm").addEventListener("submit", async function (event) {
  event.preventDefault(); // Prevent the default form submission behavior

  let isValid = true;

  // Validate Name
  const nameInput = document.getElementById("name");
  if (!nameInput.value.trim()) {
    nameInput.classList.add("is-invalid");
    isValid = false;
  } else {
    nameInput.classList.remove("is-invalid");
    nameInput.classList.add("is-valid");
  }

  // Validate Email
  const emailInput = document.getElementById("email");
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(emailInput.value)) {
    emailInput.classList.add("is-invalid");
    isValid = false;
  } else {
    emailInput.classList.remove("is-invalid");
    emailInput.classList.add("is-valid");
  }

  // Validate Password
  const passwordInput = document.getElementById("password");
  if (passwordInput.value.length < 8) {
    passwordInput.classList.add("is-invalid");
    isValid = false;
  } else {
    passwordInput.classList.remove("is-invalid");
    passwordInput.classList.add("is-valid");
  }

  // Validate Confirm Password
  const confirmPasswordInput = document.getElementById("confirmPassword");
  if (passwordInput.value !== confirmPasswordInput.value) {
    confirmPasswordInput.classList.add("is-invalid");
    isValid = false;
  } else {
    confirmPasswordInput.classList.remove("is-invalid");
    confirmPasswordInput.classList.add("is-valid");
  }

  // If the form is valid, allow form submission
  if (isValid) {
    // Simulate an asynchronous operation (e.g., sending data to a server)
    await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulates a delay of 1 second

    // Show thank you popup
    document.getElementById("thankYouPopup").style.display = "flex"; // Show popup
  }
});

// Add event listener to the reset button
document.getElementById("resetFormBtn").addEventListener("click", function () {
  document.querySelectorAll("input").forEach((input) => {
    input.value = ""; // Clear each input field
    input.classList.remove("is-valid", "is-invalid"); // Reset validation classes
  });
});

// Close the popup when the close button or outside of the popup is clicked
const closePopup = () => {
  document.getElementById("thankYouPopup").style.display = "none"; // Hide popup
};

document.querySelector(".close-btn").addEventListener("click", closePopup);
document.getElementById("closePopupBtn").addEventListener("click", closePopup);

// Close the popup if the user clicks outside of the popup content
document
  .getElementById("thankYouPopup")
  .addEventListener("click", function (event) {
    if (event.target === this) {
      closePopup();
    }
  });

// Function to change background color of the form
const colors = ["#b10b0b", "#ffff99", "#ffcc99", "#f0ba09"]; // Array of colors
let currentColorIndex = 0;

document
  .getElementById("changeBgColorBtn")
  .addEventListener("click", function () {
    const contactForm = document.getElementById("contactForm"); // Select the form
    // Change background color to the next color in the array
    contactForm.style.backgroundColor = colors[currentColorIndex];
    // Update the index to cycle through colors
    currentColorIndex = (currentColorIndex + 1) % colors.length;
  });