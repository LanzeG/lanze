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


const values = ['Frontend', 'RPA', 'UI/UX', 'Backend????'];
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
          textElement.style.transform = 'translateX(1%)';
          setTimeout(() => {
            textElement.style.transition = '';
            if (index < values.length - 1) {
              index++;
            } else {
              index = 0;
            }
            animateText();
          }, values[index] === 'Backend????' ? 5000 : 3000); 
        }, 2000); 
      }
    }, 100); 
  } else {
    setTimeout(() => {
      if (index < values.length - 1) {
        index++;
      } else {
        index = 0;
      }
      animateText();
    }, 3000); 
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

    var downloadLink = document.getElementById('downloadLink');
                
    downloadLink.addEventListener('click', function(event) {
        downloadQR(event);
    });

    function downloadQR(event) {
        try {

            event.preventDefault();

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


  function generateSlideHTML(slide) {
    return `
      <div class="keen-slider__slide">
        <div class="bannerSlideWrap">
          <p class="top-p">
            <span class="lanzespan">${slide.category}</span>
            ${slide.content} — <a href="${slide.link}"><span class="ctaText" style="color: rgb(0, 153, 255);">Try now</span><span class="doubleArrows" style="color: rgb(0, 153, 255);"> &gt;&gt;</span></a>
          </p>
        </div>
      </div>
    `;
  }

  // Function to generate HTML for all slides
  function generateSliderHTML() {
    var sliderHTML = '';
    slides.forEach(function(slide) {
      sliderHTML += generateSlideHTML(slide);
    });
    return sliderHTML;
  }

  // Insert generated HTML into the slider container
  document.querySelector('.keen-slider').innerHTML = generateSliderHTML();



document.addEventListener("DOMContentLoaded", function() {
  const slider = document.querySelector('.keen-slider');
  const slides = slider.querySelectorAll('.keen-slider__slide');
  let currentIndex = 0;

  // Function to show a slide
  const showSlide = (index) => {
    // Hide all slides
    slides.forEach(slide => {
      slide.style.display = 'none';
    });
    // Show the slide at the specified index
    slides[index].style.display = 'block';
  };

  // Initial slide display
  showSlide(currentIndex);

  // Change slide every 5 seconds
  setInterval(() => {
    // Increment current index
    currentIndex = (currentIndex + 1) % slides.length;
    // Show the next slide
    showSlide(currentIndex);
  }, 5000);
});

function embedVismeForm() {
  var container = document.createElement("div");
  container.classList.add("visme_d");
  container.setAttribute("data-title", "LANZE FORM");
  container.setAttribute("data-url", "q6pg1myr-lanze-form?fullPage=true");
  container.setAttribute("data-domain", "forms");
  container.setAttribute("data-full-page", "true");
  container.setAttribute("data-min-height", "100vh");
  container.setAttribute("data-form-id", "33768");
  
  var script = document.createElement("script");
  script.src = "https://static-bundles.visme.co/forms/vismeforms-embed.js";
  
  document.body.appendChild(container);
  document.body.appendChild(script);
}

// // Disable right-click on the webpage
// document.addEventListener('contextmenu', function(e) {
//   e.preventDefault();
// });

// // Disable keyboard shortcuts for viewing page source
// document.onkeydown = function(e) {
//   if (e.ctrlKey && (e.keyCode === 85 || e.keyCode === 83 || e.keyCode === 67)) {
//       return false;
//   }
// };
   document.addEventListener('contextmenu', function(e) {
        e.preventDefault();
        var contextMenu = document.getElementById('context-menu');
        contextMenu.style.display = 'block';
        contextMenu.style.left = e.pageX + 'px';
        contextMenu.style.top = e.pageY + 'px';
        setTimeout(function() {
            contextMenu.classList.add('show-menu');
        }, 10);
    });

    // Hide custom context menu on click outside
    document.addEventListener('click', function(e) {
        var contextMenu = document.getElementById('context-menu');
        contextMenu.classList.remove('show-menu');
    });

    // Functionality for menu items
    document.getElementById('refresh').addEventListener('click', function() {
        location.reload();
    });

    // document.getElementById('donate').addEventListener('click', function() {
    //     var donateCard = document.getElementById('donate-card');
    //     donateCard.style.display = 'block';
    // });

    // document.getElementById('contact').addEventListener('click', function() {
    //     var contactCard = document.getElementById('contact-card');
    //     contactCard.style.display = 'block';
    // });