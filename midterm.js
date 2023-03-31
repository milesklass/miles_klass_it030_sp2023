<footer>
  <p id="breakpoint-message"></p>
</footer>

<script>
  // get the current width of the window
  const windowWidth = window.innerWidth;

  // get the message element in the footer
  const breakpointMessage = document.getElementById('breakpoint-message');

  // set the message based on the current breakpoint
  if (windowWidth < 576) {
    breakpointMessage.textContent = 'You are currently on a mobile device';
  } else if (windowWidth < 768) {
    breakpointMessage.textContent = 'You are on a tablet device';
  } else {
    breakpointMessage.textContent = 'Desktop devices are the best to view my website';
  }
</script>



 <p id="greeting-message">Welcome!</p>
const greetingMsg = document.getElementById("greeting-message");
const currentHour = new Date().getHours();

if (currentHour < 12) {
  greetingMsg.textContent = "Good morning!";
} else if (currentHour < 16) {
  greetingMsg.textContent = "Good afternoon!";
} else if (currentHour < 20) {
  greetingMsg.textContent = "Good evening!";
} else {
  greetingMsg.textContent = "Good night!";
}
