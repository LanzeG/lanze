// api/saveKey.js

const fs = require('fs');

export default async (req, res) => {
  if (req.method === 'POST') {
    const { key } = req.body;

    if (!key) {
      return res.status(400).json({ error: 'Key is required' });
    }

    saveKeyToJsonFile(key);

    return res.status(200).json({ message: 'Key saved successfully' });
  } else {
    return res.status(405).json({ error: 'Method not allowed' });
  }
};

// Function to save the key to a JSON file
function saveKeyToJsonFile(key) {
  const jsonData = { "key": key };
  const jsonString = JSON.stringify(jsonData);

  // Write the JSON string to a file named keys.json
  fs.writeFile('keys.json', jsonString, (err) => {
    if (err) {
      console.error('Error writing to keys.json:', err);
      return;
    }
    console.log('Key saved to keys.json');
  });
}
