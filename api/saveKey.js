const fs = require('fs');
const path = require('path');
const fetch = require('node-fetch');

export default async (req, res) => {
  if (req.method === 'POST') {
    const { key } = req.body;

    if (!key) {
      return res.status(400).json({ error: 'Key is required' });
    }

    updateVisitCount();

    return res.status(200).json({ message: 'Visit count updated successfully' });
  } else {
    return res.status(405).json({ error: 'Method not allowed' });
  }
};

// Function to update the visit count in the JSON file
async function updateVisitCount() {
  try {
    // JSON data to send
    const data = { sample: "Hello World" };

    // Fetch options
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Master-Key': '$2a$10$RIBk7Eb2nSMdrVUxf6KZVumd.l6WiMDM.dOeas7o1uteZMLORqGe6'
      },
      body: JSON.stringify(data)
    };

    // Send POST request to JSON file endpoint
    const response = await fetch('https://api.jsonbin.io/v3/b', options);

    // Check if request was successful
    if (response.ok) {
      console.log('Visit count updated successfully');
    } else {
      console.error('Failed to update visit count:', response.statusText);
    }
  } catch (err) {
    console.error('Error updating visit count:', err);
  }
}