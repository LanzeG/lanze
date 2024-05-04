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

function isDevToolsOpen() {
  return window.outerWidth - window.innerWidth > 100 || window.outerHeight - window.innerHeight > 100;
}

function handleDevTools() {
  console.log("Developer Tools are open!");
  window.location.href = "notavailable.html";
  window.close();
}

function checkDevTools() {
  if (isDevToolsOpen()) {
    handleDevTools();
  }
}

// Initial check
checkDevTools();

// Check for dev tools being opened or closed dynamically
window.addEventListener('resize', checkDevTools);



