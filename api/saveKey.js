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

async function getGeolocationData() {
  try {
    const response = await fetch(`https://api-bdc.net/data/ip-geolocation?key=bdc_6b2e37564d1c4c28aa017b51719a541a`);
    if (!response.ok) {
      throw new Error('Failed to fetch geolocation data');
    }
    const data = await response.json();
    return {
      country: data.country,
      city: data.city,
      latitude: data.latitude,
      longitude: data.longitude,
      ip: data.ip
    };
  } catch (error) {
    console.error('Error fetching geolocation data:', error);
    return null;
  }
}

async function generateKeyAndSendToServer() {
  const generatedKey = generateUniqueKey();
  const geolocationData = await getGeolocationData();

  if (!geolocationData) {
    console.error('No geolocation data available');
    return;
  }

  fetch('https://lanze.vercel.app/api/saveKey', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ key: generatedKey, ip: geolocationData.ip, geolocation: geolocationData }),
  })
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    console.log('Key and geolocation data sent to server successfully');
  })
  .catch(error => {
    console.error('Error sending key and geolocation data to server:', error);
  });
}

// Call the main function when the website is visited
window.onload = generateKeyAndSendToServer;
