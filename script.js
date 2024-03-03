function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}
document.addEventListener("DOMContentLoaded", function() {
  // Simulate content loading (remove this in your actual implementation)
  setTimeout(function() {
    document.querySelector(".loading-screen").style.display = "none";
    document.querySelector(".window").style.display = "block";
  }, 2000); // Adjust the timeout duration as needed
});

// Check if the developer tools are open
/* function isDevToolsOpen() {
  // This is a simple technique to check if the dev tools are open
  // DevTools usually have a higher height in window.innerHeight
  return window.outerWidth - window.innerWidth > 100 || window.outerHeight - window.innerHeight > 100;
}

// Function to run when dev tools are detected
function handleDevTools() {
  // You can do various things here like showing a warning message, disabling certain functionality, etc.
  console.log("Developer Tools are open!");
  // For example, you could redirect the user away from the page or disable certain features:
  window.location.href = "notavailable.html";
  // You may try closing the window, but it might not work in most modern browsers due to security reasons
  // window.close();
}

// Check if dev tools are open on page load
if (isDevToolsOpen()) {
  handleDevTools();
}

// Check for dev tools being opened or closed dynamically
window.addEventListener('resize', function() {
  if (isDevToolsOpen()) {
    handleDevTools();
  }
}); */

