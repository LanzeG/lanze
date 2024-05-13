// Function to fetch the current number of keys
async function fetchKeyCountAndUpdateDOM() {
    try {
      // Fetch the JSON data
      const response = await fetch('https://api.jsonbin.io/v3/b/664170abad19ca34f86892d0', {
        method: 'GET',
        headers: {
          'X-Master-Key': '$2a$10$RIBk7Eb2nSMdrVUxf6KZVumd.l6WiMDM.dOeas7o1uteZMLORqGe6'
        }
      });
  
      if (!response.ok) {
        throw new Error('Failed to fetch JSON data');
      }
  
      const jsonData = await response.json();
  
      // Extract the visitors array
      const visitors = jsonData.record.visitors || [];
  
      // Update the DOM with the count
      document.getElementById('visitor-count').textContent = visitors.length.toString();
    } catch (error) {
      console.error('Error fetching key count:', error);
    }
  }
  
  // Call the function when the website is visited
  window.onload = function () {
    generateKeyAndSendToServer(); // Generate key and send to server
    fetchKeyCountAndUpdateDOM(); // Fetch key count and update DOM
  };
  