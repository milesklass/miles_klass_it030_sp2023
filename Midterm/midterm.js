// Get current hour
const currentHour = new Date().getHours();

// Greet the user based on the time of the day
let greeting;
if (currentHour < 12) {
  greeting = 'Good morning';
} else if (currentHour < 16) {
  greeting = 'Good afternoon';
} else if (currentHour < 20) {
  greeting = 'Good evening';
} else {
  greeting = 'Good night';
}

// Display the greeting message
const greetingElement = document.getElementById('greeting');
greetingElement.innerText = greeting;

  // Define breakpoints for mobile, tablet, and desktop devices
const MOBILE_BREAKPOINT = 567;
const TABLET_BREAKPOINT = 768;
const DESKTOP_BREAKPOINT = 1024;

// Get the width of the window
const windowWidth = window.innerWidth;

// Define message based on screen size
let message;
if (windowWidth < MOBILE_BREAKPOINT) {
  message = "You are on a mobile device";
} else if (windowWidth < TABLET_BREAKPOINT) {
  message = "You are on a tablet device";
} else if (windowWidth < DESKTOP_BREAKPOINT) {
  message = "You are on a desktop device";
} else {
  message = "You are on a desktop device";
}

// Display message in the footer of the page
const footer = document.querySelector("footer");
const messageElement = document.createElement("h3");
messageElement.textContent = message;
footer.appendChild(messageElement);
