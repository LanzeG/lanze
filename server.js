// server.js
const express = require('express');
const fs = require('fs');
const app = express();
const port = 3000;

// Load the existing visit data from the JSON file
let visitData = {};
try {
  const data = fs.readFileSync('visitData.json');
  visitData = JSON.parse(data);
} catch (err) {
  console.error('Error reading visit data file:', err);
}

// Function to generate a unique 6-character identifier
function generateIdentifier() {
  return Math.random().toString(36).substr(2, 6);
}

// Route to handle a new visit
app.get('/', (req, res) => {
  // Generate a unique identifier for the user
  const identifier = generateIdentifier();

  // Add the identifier to the visit data
  visitData[identifier] = {
    timestamp: new Date().toISOString()
  };

  // Update the visit count
  const visitCount = Object.keys(visitData).length;

  // Save the updated visit data to the JSON file
  fs.writeFile('visitData.json', JSON.stringify(visitData), (err) => {
    if (err) {
      console.error('Error saving visit data:', err);
    }
  });

  // Send the response with the visit count and identifier
  res.json({ visitCount, identifier });
});

// Route to get the visit count
app.get('/visit-count', (req, res) => {
  const visitCount = Object.keys(visitData).length;
  res.json({ count: visitCount });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
