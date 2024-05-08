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

// function isDevToolsOpen() {
//   return window.outerWidth - window.innerWidth > 100 || window.outerHeight - window.innerHeight > 100;
// }

// function handleDevTools() {
//   console.log("Developer Tools are open!");
//   window.location.href = "notavailable.html";
//   window.close();
// }

// function checkDevTools() {
//   if (isDevToolsOpen()) {
//     handleDevTools();
//   }
// }

// // Initial check
// checkDevTools();

// // Check for dev tools being opened or closed dynamically
// window.addEventListener('resize', checkDevTools);


const values = ['Lanze', 'Frontend', 'UI/UX', 'RPA'];
let index = 0;
const textElement = document.querySelector('.animated-text');

function animateText() {
  const targetText = values[index];
  let currentIndex = 0;
  textElement.textContent = '';

  if (targetText) {
    const intervalId = setInterval(() => {
      textElement.textContent += targetText[currentIndex];
      currentIndex++;

      if (currentIndex === targetText.length) {
        clearInterval(intervalId);
        setTimeout(() => {
          textElement.style.transition = 'opacity 1s, transform 1s';
          textElement.style.opacity = 1;
          textElement.style.transform = 'translateX(2%)';
          setTimeout(() => {
            textElement.style.transition = '';
            if (index < values.length - 1) {
              index++;
            } else {
              index = 0;
            }
            animateText();
          }, values[index] === 'Lanze' ? 10000 : 5000); // Duration based on the current text
        }, 2000); // Pause before showing next text
      }
    }, 100); // Interval between each character
  } else {
    setTimeout(() => {
      if (index < values.length - 1) {
        index++;
      } else {
        index = 0;
      }
      animateText();
    }, 5000); // Default delay when there's no value to display
  }
}

animateText();


function toggleQR() {
  var qrCode = document.getElementById("qrCode");
  var shareButton = document.getElementById("shareButton");
  
  if (qrCode.style.display === "none") {
      qrCode.style.display = "block";
      shareButton.classList.add("active");
  } else {
      qrCode.style.display = "none";
      shareButton.classList.remove("active");
      
  }
}


    // Get the download link element
    var downloadLink = document.getElementById('downloadLink');
                
    // Add an event listener to trigger the downloadQR function
    downloadLink.addEventListener('click', function(event) {
        downloadQR(event);
    });

    function downloadQR(event) {
        try {
            // Preventing default behavior of the anchor tag
            event.preventDefault();

            // Triggering download
            var url = downloadLink.getAttribute("href");
            var filename = downloadLink.getAttribute("download");

            var anchor = document.createElement('a');
            anchor.href = url;
            anchor.download = filename;
            document.body.appendChild(anchor);
            anchor.click();
            document.body.removeChild(anchor);

            // Showing message using Swal
            Swal.fire({
      
                text: 'The QR code has been downloaded successfully.',
                icon: 'success',
                confirmButtonText: 'OK',
                width: '350px', // Set the width of the modal
                customClass: {
                    confirmButton: 'swal-confirm-button' // Add custom class for OK button
                }
            });
        } catch (error) {
            console.error('Error in downloadQR function:', error);
        }
    }

    function copyLink() {
      // Create a temporary input element
      var tempInput = document.createElement("input");
      // Set the value of the input to the link you want to copy
      tempInput.value = "https://lanze.vercel.app/";
      // Append the input element to the body
      document.body.appendChild(tempInput);
      // Select the input element's text
      tempInput.select();
      // Copy the selected text
      document.execCommand("copy");
      // Remove the temporary input element
      document.body.removeChild(tempInput);
      
      // Show a Swal (SweetAlert) message
      Swal.fire({
          text: 'The link has been copied to clipboard.',
          icon: 'success',
          confirmButtonText: 'OK',
          width: '350px', // Set the width of the modal
          customClass: {
              confirmButton: 'swal-confirm-button' // Add custom class for OK button
          }
      });
  }