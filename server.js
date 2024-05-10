// server.js

const express = require('express');
const app = express();
const port = process.env.PORT || 3000; // Use the port provided by the hosting environment or default to 3000

// Hardcoded visit count
let visitCount = 240;

// Route to get the visit count
app.get('/visit-count', (req, res) => {
  res.json({ count: visitCount });
});

// Start the server
app.listen(port, '0.0.0.0', () => { // Listen on all network interfaces
  console.log(`Server is running on port ${port}`);
});
