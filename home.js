// Audio object for the online sound effect
const clickSound = new Audio('./audio/click.mp3'); 

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

function updateDateTime() {
  const dateTimeBlock = document.getElementById("dateTime");
  const now = new Date();

  // Format the date and time
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  };

  const formattedDate = now.toLocaleString("en-US", options);
  dateTimeBlock.innerText = formattedDate;
}

// Update date and time every second
setInterval(updateDateTime, 1000);

// Initial call to display immediately on load
updateDateTime();
