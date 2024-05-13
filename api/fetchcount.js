// Function to fetch the current number of keys
async function fetchKeyCount() {
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
  
      return visitors.length;
    } catch (error) {
      console.error('Error fetching key count:', error);
      return -1; // Return an error indicator
    }
  }
  
  // Example of how to use the fetchKeyCount function
  async function exampleUsage() {
    const keyCount = await fetchKeyCount();
    console.log('Number of keys:', keyCount);
  }
  
  // Call the example usage
  exampleUsage();
  