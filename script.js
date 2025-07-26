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


const values = ['Frontend', 'RPA', 'UI/UX', 'Backend', 'Developer'];
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
          }, values[index] === 'Developer' ? 3000 : 2000); 
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
                toast: true,
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
          toast: true,
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

    document.addEventListener('DOMContentLoaded', function() {
      const donateButton = document.getElementById('donate');
      
      donateButton.addEventListener('click', function() {
        window.donationPopup.show();
      });
    });

    // document.getElementById('contact').addEventListener('click', function() {
    //     var contactCard = document.getElementById('contact-card');
    //     contactCard.style.display = 'block';
    // });


    function animateValue(element, start, end, duration) {
      var range = end - start;
      var current = start;
      var increment = end > start ? 1 : -1;
      var stepTime = Math.abs(Math.floor(duration / range));
      var timer = setInterval(function() {
          current += increment;
          element.textContent = current;
          if (current === end) {
              clearInterval(timer);
          }
      }, stepTime);
  }

  var customerCount = document.getElementById('customer-count');
  var systemCount = document.getElementById('system-count');
  var languageCount = document.getElementById('language-count');

  animateValue(customerCount, 0, 2, 4000); 
  animateValue(systemCount, 0, 32, 4000); 
  animateValue(languageCount, 0, 21, 4000);


  function generateUniqueKey() {
    let key = getCookie('uniqueKey');
    
    if (!key) {
      const randomChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
      key = '';
      for (let i = 0; i < 10; i++) {
        key += randomChars.charAt(Math.floor(Math.random() * randomChars.length));
      }
      setCookie('uniqueKey', key, 30); 
    }
    
    return key;
  }
  
  // Function to get a cookie value
  function getCookie(name) {
    const cookieValue = document.cookie.match('(^|;)\\s*' + name + '\\s*=\\s*([^;]+)');
    return cookieValue ? cookieValue.pop() : null;
  }
  
  // Function to set a cookie
  function setCookie(name, value, days) {
    const date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    const expires = "expires=" + date.toUTCString();
    document.cookie = name + "=" + value + ";" + expires + ";path=/";
  }
  
  async function fetchGeolocation() {
    try {
      const response = await fetch(`https://api-bdc.net/data/ip-geolocation?key=bdc_6b2e37564d1c4c28aa017b51719a541a`);
      if (!response.ok) {
        throw new Error('Failed to fetch geolocation data');
      }
      const data = await response.json();
      return {
        country: data.country,
        city: data.city, // Retrieving city from API response
        latitude: data.latitude,
        longitude: data.longitude,
        ip: data.ip
      };
    } catch (error) {
      console.error('Error fetching geolocation data:', error);
      return null;
    }
  }
  
  
  async function fetchIPAddress() {
    try {
      const response = await fetch('https://api.ipify.org?format=json');
      if (!response.ok) {
        throw new Error('Failed to fetch IP address');
      }
      const ipData = await response.json();
      // console.log('ur IP Address :)', ipData.ip);
      return ipData.ip;
    } catch (error) {
      console.error('Error fetching IP address:', error);
      return null;
    }
  }
  
  async function generateKeyAndSendToServer() {
    const generatedKey = generateUniqueKey();
    const ip = await fetchIPAddress();
    const geoData = await fetchGeolocation();
  
    const requestBody = {
      key: generatedKey,
      ip: ip,
      geolocation: geoData ? {
        country: {
          isoAlpha2: geoData.country.isoAlpha2,
          isoAlpha3: geoData.country.isoAlpha3,
          m49Code: geoData.country.m49Code,
          name: geoData.country.name,
          isoName: geoData.country.isoName
        },
        city: geoData.city,
        latitude: geoData.latitude,
        longitude: geoData.longitude,
        timeZone: geoData.timeZone
      } : null,
    };
  
    fetch('https://lanze.vercel.app/api/saveKey', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(requestBody),
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      console.log('%cThis is a browser feature intended for developers. If someone told you to copy-paste something here to take some information, it is a scam', 'color: red; font-size: 16px;');
    })
    .catch(error => {
      console.error('Error sending data to server:', error);
    });
  }
  
  // Call the main function when the website is visited
  window.onload = generateKeyAndSendToServer;
  
  
  
  
  

async function fetchKeyCount() {
  try {
    const response = await fetch('https://api.jsonbin.io/v3/b/6722c991e41b4d34e44b993e', {
      method: 'GET',
      headers: {
        'X-Master-Key': '$2a$10$2pPl9TwYcFIst5KzUDs/UOkjyAQsPAgohEJffeEf5bC5h2zGAitRi'
      }
    });

    if (!response.ok) {
      throw new Error('Failed to fetch JSON data');
    }

    const jsonData = await response.json();
    const visitors = jsonData.record.visitors || [];
    return visitors.length;
  } catch (error) {
    console.error('Error fetching key count:', error);
    return -1;
  }
}

async function exampleUsage() {
  const keyCount = await fetchKeyCount();
  console.log('Number of visits:', keyCount);
  const element = document.getElementById('keyCount');
  let currentCount = parseInt(element.textContent.trim()); // Ensure to trim whitespace
  if (isNaN(currentCount)) {
    currentCount = 0; // Set default value if initial value cannot be parsed
  }
  const targetCount = keyCount;
  const increment = targetCount > currentCount ? 1 : -1;

  // Animation loop
  const animationInterval = setInterval(() => {
    currentCount += increment;
    element.textContent = currentCount.toString();

    // Stop the animation when reaching the target count
    if (currentCount === targetCount) {
      clearInterval(animationInterval);
    }
  }, 30); // Adjust the animation speed here
}

exampleUsage();

// document.addEventListener("DOMContentLoaded", function() {
//   const botIcon = document.getElementById("bot-icon");
//   const chatbox = document.getElementById("chatbox");

//   botIcon.addEventListener("click", function() {
//     chatbox.style.display = chatbox.style.display === "none" ? "block" : "none";
//   });
// });

document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.mdb-mobile-menu-btn');
    const mobileMenu = document.querySelector('.mdb-mobile-menu-content');
    const closeButton = document.querySelector('.mdb-mobile-close');
    const backButton = document.querySelector('.mdb-mobile-back');
    const body = document.body;
    
    const subMenuItems = document.querySelectorAll('.mdb-mobile-item[data-submenu]');
    const subMenus = document.querySelectorAll('.mdb-mobile-submenu');
    
    function openMenu() {
        mobileMenu.classList.add('mdb-active');
        body.style.overflow = 'hidden';
    }
    
    function closeMenu() {
        mobileMenu.classList.remove('mdb-active');
        mobileMenu.classList.remove('submenu-active');
        body.style.overflow = '';
        subMenus.forEach(submenu => submenu.classList.remove('active'));
    }
    
    function openSubMenu(submenuId) {
        mobileMenu.classList.add('submenu-active');
        document.getElementById(submenuId).classList.add('active');
    }
    
    function closeSubMenu() {
        mobileMenu.classList.remove('submenu-active');
        subMenus.forEach(submenu => submenu.classList.remove('active'));
    }
    
    menuToggle.addEventListener('click', openMenu);
    closeButton.addEventListener('click', closeMenu);
    
    subMenuItems.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            const submenuId = item.getAttribute('data-submenu');
            openSubMenu(submenuId);
        });
    });
    
    backButton.addEventListener('click', (e) => {
        e.preventDefault();
        if (mobileMenu.classList.contains('submenu-active')) {
            closeSubMenu();
        } else {
            closeMenu();
        }
    });
});

const mdbEditor = ace.edit("mdb-editor");
mdbEditor.setTheme("ace/theme/textmate");

const mdbLanguageSelect = document.getElementById('mdb-language-select');
const mdbChallengeDiv = document.getElementById('mdb-challenge');
const mdbSubmitBtn = document.getElementById('mdb-submit-btn');
const mdbTryAgainBtn = document.getElementById('mdb-try-again-btn');
const mdbHintBtn = document.getElementById('mdb-hint-btn');
const mdbResultDiv = document.getElementById('mdb-result');

const mdbChallenges = {
    python: [
        {
            question: "Write a function that returns the sum of two numbers.",
            initialCode: "def sum_two_numbers(a, b):\n    # Your code here\n    pass\n\n# Test your function\nprint(sum_two_numbers(3, 4))",
            solution: "def sum_two_numbers(a, b):\n    return a + b\n\n# Test your function\nprint(sum_two_numbers(3, 4))"
        },
        {
            question: "Create a Flask route that returns 'Hello, World!' when accessed.",
            initialCode: "from flask import Flask\n\napp = Flask(__name__)\n\n# Your code here\n\nif __name__ == '__main__':\n    app.run(debug=True)",
            solution: "from flask import Flask\n\napp = Flask(__name__)\n\n@app.route('/')\ndef hello_world():\n    return 'Hello, World!'\n\nif __name__ == '__main__':\n    app.run(debug=True)"
        },
        {
            question: "Write a function to check if a number is prime.",
            initialCode: "def is_prime(n):\n    # Your code here\n    pass\n\n# Test your function\nprint(is_prime(17))\nprint(is_prime(4))",
            solution: "def is_prime(n):\n    if n < 2:\n        return False\n    for i in range(2, int(n**0.5) + 1):\n        if n % i == 0:\n            return False\n    return True\n\n# Test your function\nprint(is_prime(17))\nprint(is_prime(4))"
        },
        {
            question: "Create a decorator that measures the execution time of a function.",
            initialCode: "import time\n\n# Your decorator code here\n\n@measure_time\ndef slow_function():\n    time.sleep(2)\n\nslow_function()",
            solution: "import time\n\ndef measure_time(func):\n    def wrapper(*args, **kwargs):\n        start = time.time()\n        result = func(*args, **kwargs)\n        end = time.time()\n        print(f'{func.__name__} took {end - start:.2f} seconds')\n        return result\n    return wrapper\n\n@measure_time\ndef slow_function():\n    time.sleep(2)\n\nslow_function()"
        }
    ],
    javascript: [
        {
            question: "Write a function that returns the sum of two numbers.",
            initialCode: "function sumTwoNumbers(a, b) {\n    // Your code here\n}\n\n// Test your function\nconsole.log(sumTwoNumbers(3, 4));",
            solution: "function sumTwoNumbers(a, b) {\n    return a + b;\n}\n\n// Test your function\nconsole.log(sumTwoNumbers(3, 4));"
        },
        {
            question: "Create an Express route that returns 'Hello, World!' when accessed.",
            initialCode: "const express = require('express');\nconst app = express();\n\n// Your code here\n\napp.listen(3000, () => console.log('Server running on port 3000'));",
            solution: "const express = require('express');\nconst app = express();\n\napp.get('/', (req, res) => {\n    res.send('Hello, World!');\n});\n\napp.listen(3000, () => console.log('Server running on port 3000'));"
        },
        {
            question: "Write a function to check if a string is a palindrome.",
            initialCode: "function isPalindrome(str) {\n    // Your code here\n}\n\n// Test your function\nconsole.log(isPalindrome('racecar'));\nconsole.log(isPalindrome('hello'));",
            solution: "function isPalindrome(str) {\n    const cleanStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');\n    return cleanStr === cleanStr.split('').reverse().join('');\n}\n\n// Test your function\nconsole.log(isPalindrome('racecar'));\nconsole.log(isPalindrome('hello'));"
        },
        {
            question: "Implement a debounce function.",
            initialCode: "function debounce(func, delay) {\n    // Your code here\n}\n\n// Usage\nconst debouncedLog = debounce(() => console.log('Debounced'), 1000);\ndebouncedLog();\ndebouncedLog();\ndebouncedLog();",
            solution: "function debounce(func, delay) {\n    let timeoutId;\n    return function (...args) {\n        clearTimeout(timeoutId);\n        timeoutId = setTimeout(() => func.apply(this, args), delay);\n    };\n}\n\n// Usage\nconst debouncedLog = debounce(() => console.log('Debounced'), 1000);\ndebouncedLog();\ndebouncedLog();\ndebouncedLog();"
        }
    ],
    java: [
        {
            question: "Write a method that returns the sum of two integers.",
            initialCode: "public class Solution {\n    public static int sumTwoNumbers(int a, int b) {\n        // Your code here\n        return 0;\n    }\n\n    public static void main(String[] args) {\n        System.out.println(sumTwoNumbers(3, 4));\n    }\n}",
            solution: "public class Solution {\n    public static int sumTwoNumbers(int a, int b) {\n        return a + b;\n    }\n\n    public static void main(String[] args) {\n        System.out.println(sumTwoNumbers(3, 4));\n    }\n}"
        },
        {
            question: "Create a Spring Boot controller that returns 'Hello, World!' when accessed.",
            initialCode: "import org.springframework.boot.SpringApplication;\nimport org.springframework.boot.autoconfigure.SpringBootApplication;\nimport org.springframework.web.bind.annotation.RestController;\n\n@SpringBootApplication\n@RestController\npublic class HelloWorldApplication {\n\n    public static void main(String[] args) {\n        SpringApplication.run(HelloWorldApplication.class, args);\n    }\n\n    // Your code here\n}",
            solution: "import org.springframework.boot.SpringApplication;\nimport org.springframework.boot.autoconfigure.SpringBootApplication;\nimport org.springframework.web.bind.annotation.GetMapping;\nimport org.springframework.web.bind.annotation.RestController;\n\n@SpringBootApplication\n@RestController\npublic class HelloWorldApplication {\n\n    public static void main(String[] args) {\n        SpringApplication.run(HelloWorldApplication.class, args);\n    }\n\n    @GetMapping(\"/\")\n    public String hello() {\n        return \"Hello, World!\";\n    }\n}"
        },
        {
            question: "Implement a method to reverse a string.",
            initialCode: "public class StringReverser {\n    public static String reverseString(String str) {\n        // Your code here\n        return \"\";\n    }\n\n    public static void main(String[] args) {\n        System.out.println(reverseString(\"Hello, World!\"));\n    }\n}",
            solution: "public class StringReverser {\n    public static String reverseString(String str) {\n        return new StringBuilder(str).reverse().toString();\n    }\n\n    public static void main(String[] args) {\n        System.out.println(reverseString(\"Hello, World!\"));\n    }\n}"
        },
        {
            question: "Create a generic method to find the maximum element in an array.",
            initialCode: "public class MaxFinder {\n    public static <T extends Comparable<T>> T findMax(T[] array) {\n        // Your code here\n        return null;\n    }\n\n    public static void main(String[] args) {\n        Integer[] intArray = {3, 7, 2, 5, 1, 9};\n        System.out.println(findMax(intArray));\n\n        String[] strArray = {\"apple\", \"banana\", \"cherry\", \"date\"};\n        System.out.println(findMax(strArray));\n    }\n}",
            solution: "public class MaxFinder {\n    public static <T extends Comparable<T>> T findMax(T[] array) {\n        if (array == null || array.length == 0) {\n            return null;\n        }\n        T max = array[0];\n        for (int i = 1; i < array.length; i++) {\n            if (array[i].compareTo(max) > 0) {\n                max = array[i];\n            }\n        }\n        return max;\n    }\n\n    public static void main(String[] args) {\n        Integer[] intArray = {3, 7, 2, 5, 1, 9};\n        System.out.println(findMax(intArray));\n\n        String[] strArray = {\"apple\", \"banana\", \"cherry\", \"date\"};\n        System.out.println(findMax(strArray));\n    }\n}"
        }
    ],
    csharp: [
        {
            question: "Write a method that returns the sum of two integers.",
            initialCode: "public class Solution\n{\n    public static int SumTwoNumbers(int a, int b)\n    {\n        // Your code here\n        return 0;\n    }\n\n    public static void Main(string[] args)\n    {\n        Console.WriteLine(SumTwoNumbers(3, 4));\n    }\n}",
            solution: "public class Solution\n{\n    public static int SumTwoNumbers(int a, int b)\n    {\n        return a + b;\n    }\n\n    public static void Main(string[] args)\n    {\n        Console.WriteLine(SumTwoNumbers(3, 4));\n    }\n}"
        },
        {
            question: "Create an ASP.NET Core controller that returns 'Hello, World!' when accessed.",
            initialCode: "using Microsoft.AspNetCore.Mvc;\n\nnamespace HelloWorld.Controllers\n{\n    [ApiController]\n    [Route(\"/\")]\n    public class HelloController : ControllerBase\n    {\n        // Your code here\n    }\n}",
            solution: "using Microsoft.AspNetCore.Mvc;\n\nnamespace HelloWorld.Controllers\n{\n    [ApiController]\n    [Route(\"/\")]\n    public class HelloController : ControllerBase\n    {\n        [HttpGet]\n        public string Get()\n        {\n            return \"Hello, World!\";\n        }\n    }\n}"
        },
        {
            question: "Implement a LINQ query to find all even numbers in a list.",
            initialCode: "using System;\nusing System.Linq;\nusing System.Collections.Generic;\n\npublic class Program\n{\n    public static void Main()\n    {\n        List<int> numbers = new List<int> { 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 };\n        \n        // Your LINQ query here\n        var evenNumbers = numbers;\n        \n        foreach (var num in evenNumbers)\n        {\n            Console.WriteLine(num);\n        }\n    }\n}",
            solution: "using System;\nusing System.Linq;\nusing System.Collections.Generic;\n\npublic class Program\n{\n    public static void Main()\n    {\n        List<int> numbers = new List<int> { 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 };\n        \n        var evenNumbers = numbers.Where(n => n % 2 == 0);\n        \n        foreach (var num in evenNumbers)\n        {\n            Console.WriteLine(num);\n        }\n    }\n}"
        },
        {
            question: "Create a generic method to swap two values.",
            initialCode: "using System;\n\npublic class Swapper\n{\n    public static void Swap<T>(ref T a, ref T b)\n    {\n        // Your code here\n    }\n\n    public static void Main()\n    {\n        int x = 5, y = 10;\n        Console.WriteLine($\"Before swap: x = {x}, y = {y}\");\n        Swap(ref x, ref y);\n        Console.WriteLine($\"After swap: x = {x}, y = {y}\");\n\n        string s1 = \"Hello\", s2 = \"World\";\n        Console.WriteLine($\"Before swap: s1 = {s1}, s2 = {s2}\");\n        Swap(ref s1, ref s2);\n        Console.WriteLine($\"After swap: s1 = {s1}, s2 = {s2}\");\n    }\n}",
            solution: "using System;\n\npublic class Swapper\n{\n    public static void Swap<T>(ref T a, ref T b)\n    {\n        T temp = a;\n        a = b;\n        b = temp;\n    }\n\n    public static void Main()\n    {\n        int x = 5, y = 10;\n        Console.WriteLine($\"Before swap: x = {x}, y = {y}\");\n        Swap(ref x, ref y);\n        Console.WriteLine($\"After swap: x = {x}, y = {y}\");\n\n        string s1 = \"Hello\", s2 = \"World\";\n        Console.WriteLine($\"Before swap: s1 = {s1}, s2 = {s2}\");\n        Swap(ref s1, ref s2);\n        Console.WriteLine($\"After swap: s1 = {s1}, s2 = {s2}\");\n    }\n}"
        }
    ],
    ruby: [
        {
            question: "Write a method that returns the sum of two numbers.",
            initialCode: "def sum_two_numbers(a, b)\n  # Your code here\nend\n\n# Test your method\nputs sum_two_numbers(3, 4)",
            solution: "def sum_two_numbers(a, b)\n  a + b\nend\n\n# Test your method\nputs sum_two_numbers(3, 4)"
        },
        {
            question: "Create a Sinatra route that returns 'Hello, World!' when accessed.",
            initialCode: "require 'sinatra'\n\n# Your code here",
            solution: "require 'sinatra'\n\nget '/' do\n  'Hello, World!'\nend"
        },
        {
            question: "Implement a method to check if a number is prime.",
            initialCode: "def prime?(number)\n  # Your code here\nend\n\n# Test your method\nputs prime?(17)\nputs prime?(4)",
            solution: "def prime?(number)\n  return false if number <= 1\n  (2..Math.sqrt(number)).none? { |i| number % i == 0 }\nend\n\n# Test your method\nputs prime?(17)\nputs prime?(4)"
        },
        {
            question: "Create a class method to reverse a string.",
            initialCode: "class String\n  def self.reverse(str)\n    # Your code here\n  end\nend\n\n# Test your method\nputs String.reverse(\"Hello, World!\")",
            solution: "class String\n  def self.reverse(str)\n    str.chars.reverse.join\n  end\nend\n\n# Test your method\nputs String.reverse(\"Hello, World!\")"
        }
    ]
};

let mdbCurrentChallenge;
let mdbIsAnswerRevealed = false;

function mdbSetLanguage(language) {
    mdbEditor.session.setMode(`ace/mode/${language}`);
    const availableChallenges = mdbChallenges[language].filter(c => c !== mdbCurrentChallenge);
    mdbCurrentChallenge = availableChallenges[Math.floor(Math.random() * availableChallenges.length)];
    mdbChallengeDiv.textContent = mdbCurrentChallenge.question;
    mdbEditor.setValue(mdbCurrentChallenge.initialCode);
    mdbEditor.clearSelection();
    mdbResultDiv.style.display = "none";
    mdbIsAnswerRevealed = false;
    mdbUpdateButtons();
}

function mdbUpdateButtons() {
    if (mdbIsAnswerRevealed) {
        mdbSubmitBtn.style.display = "none";
        mdbTryAgainBtn.style.display = "block";
    } else {
        mdbSubmitBtn.style.display = "block";
        mdbTryAgainBtn.style.display = "none";
    }
}

function mdbSubmitAnswer() {
    const userCode = mdbEditor.getValue();
    const solution = mdbCurrentChallenge.solution;

    if (userCode.replace(/\s/g, '') === solution.replace(/\s/g, '')) {
        mdbResultDiv.textContent = "Correct! Well done!";
        mdbResultDiv.className = "success";
    } else {
        mdbResultDiv.textContent = "Not quite right. Try again or use the hint button to see the solution.";
        mdbResultDiv.className = "error";
    }
    mdbResultDiv.style.display = "block";
}

function mdbRevealAnswer() {
    mdbEditor.setValue(mdbCurrentChallenge.solution);
    mdbEditor.clearSelection();
    mdbResultDiv.textContent = "Answer revealed. Study the solution and try to understand it!";
    mdbResultDiv.className = "success";
    mdbResultDiv.style.display = "block";
    mdbIsAnswerRevealed = true;

    mdbEditor.getSession().addMarker(new ace.Range(0, 0, mdbEditor.getSession().getLength(), 0), "mdb-revealed-answer", "fullLine");
    mdbEditor.getSession().setMode("ace/mode/" + mdbLanguageSelect.value);
    
    mdbUpdateButtons();
}

function mdbTryAgain() {
    mdbSetLanguage(mdbLanguageSelect.value);
}

mdbLanguageSelect.addEventListener('change', (e) => mdbSetLanguage(e.target.value));
mdbSubmitBtn.addEventListener('click', mdbSubmitAnswer);
mdbHintBtn.addEventListener('click', mdbRevealAnswer);
mdbTryAgainBtn.addEventListener('click', mdbTryAgain);

// Initialize with Python
mdbSetLanguage('python');
const modal = document.getElementById('thankYouModal');
const closeBtn = document.getElementsByClassName('close')[0];
let selectedPlan = '';

function showModal(plan) {
    selectedPlan = plan;
    const message = plan === 'Custom Website' 
        ? 'Thank you for your interest in our Custom Website solution. Our team will contact you shortly to discuss your specific needs.'
        : `Thank you for choosing our ${plan} package. We'll be in touch soon to start your project!`;
    
    document.getElementById('modalMessage').textContent = message;
    modal.style.display = 'block';
}

function sendEmail() {
    const email = 'bermas.lester10@gmail.com';
    const subject = encodeURIComponent(`Inquiry about ${selectedPlan} package`);
    const body = encodeURIComponent(`I'm interested in the ${selectedPlan} package. Please provide more information.`);
    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
    modal.style.display = 'none';
}

closeBtn.onclick = function() {
    modal.style.display = 'none';
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}
